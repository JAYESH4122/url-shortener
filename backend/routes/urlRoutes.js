const express = require("express");
const Url = require("../models/urls");
const crypto = require("crypto");
const router = express.Router();

function generateCode(url) {
  return crypto.createHash("sha256").update(url).digest("hex").substring(0, 6);
}

router.post("/shorten", async (req, res) => {
  const { original_url } = req.body;
  const short_code = generateCode(original_url);

  try {
    const existingUrl = await Url.findOne({
      where: { original_url },
      attributes: ["short_code"],
    });

    if (existingUrl) {
      return res.json({
        short_url: `http://localhost:5000/api/${short_code}`,
      });
    }

    await Url.create({ original_url, short_code });
    res.json({ short_url: `http://localhost:5000/api/${short_code}` });
  } catch (err) {
    console.error("Error creating URL:", err.message || err);
    res
      .status(500)
      .json({ error: "Internal server error", message: err.message });
  }
});

router.get("/:short_code", async (req, res) => {
  try {
    const url = await Url.findOne({
      where: {
        short_code: req.params.short_code,
      },
      attributes: ["original_url"],
    });

    return res.redirect(301, url.original_url);
  } catch (e) {}
});

module.exports = router;
