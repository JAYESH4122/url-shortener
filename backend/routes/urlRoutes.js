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

// POST /api/shorten
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

// GET /api/:code (must be 6-character alphanumeric)
router.get("/:code([a-f0-9]{6})", async (req, res) => {
  try {
    const { code } = req.params;
    const urlRecord = await Url.findOne({ 
      where: { short_code: code },
      attributes: ['original_url']
    });

    if (!urlRecord) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    // Track clicks
    await Url.increment('clicks', { where: { short_code: code } });
    
    return res.redirect(301, urlRecord.original_url);
  } catch (err) {
    console.error("Redirect error:", err);
    res.status(500).json({ 
      error: "Internal server error",
      request_id: req.id
    });
  }
});

// 404 handler for invalid short codes
router.get("/:invalidCode", (req, res) => {
  res.status(404).json({ error: "Invalid short URL format - must be 6 alphanumeric characters" });
});

module.exports = router;