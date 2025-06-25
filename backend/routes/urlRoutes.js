const express = require("express");
const { URL } = require("url");
const Url = require("../models/urls");
const crypto = require("crypto");
const router = express.Router();

// Generate consistent short code
function generateShortCode(url) {
  return crypto
    .createHash("sha256")
    .update(url)
    .digest("hex")
    .substring(0, 6);
}

// Shorten URL endpoint
router.post("/shorten", async (req, res) => {
  try {
    const { original_url } = req.body;
    
    // Validate input
    if (!original_url) {
      return res.status(400).json({ error: "URL is required" });
    }

    // Validate URL format
    try {
      new URL(original_url);
    } catch (err) {
      return res.status(400).json({ error: "Invalid URL format" });
    }

    const short_code = generateShortCode(original_url);
    const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`;

    // Find or create URL
    const [urlRecord] = await Url.findOrCreate({
      where: { original_url },
      defaults: { short_code }
    });

    res.json({
      original_url: urlRecord.original_url,
      short_url: `${baseUrl}/api/${urlRecord.short_code}`,
      short_code: urlRecord.short_code
    });

  } catch (err) {
    console.error("Shorten URL error:", err);
    res.status(500).json({ 
      error: "Internal server error",
      ...(process.env.NODE_ENV === 'development' && { details: err.message })
    });
  }
});

// Redirect endpoint
router.get("/:short_code", async (req, res) => {
  try {
    const { short_code } = req.params;
    
    // Validate short code format
    if (!short_code || !/^[a-f0-9]{6}$/.test(short_code)) {
      return res.status(400).json({ error: "Invalid short code format" });
    }

    const urlRecord = await Url.findOne({ 
      where: { short_code },
      attributes: ['original_url']
    });

    if (!urlRecord) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    // Track clicks
    await Url.increment('clicks', { where: { short_code } });
    
    return res.redirect(301, urlRecord.original_url);
  } catch (err) {
    console.error("Redirect error:", err);
    res.status(500).json({ 
      error: "Internal server error",
      request_id: req.id
    });
  }
});

module.exports = router;