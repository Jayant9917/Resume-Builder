import { generatenanoid, normalizeUrl } from '../utils/helper.js';
import ShortUrl from '../models/shortUrl.model.js';

export const createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is required." });
    }

    const normalizedUrl = normalizeUrl(url);
    const shortUrlCode = generatenanoid(7);

    const newShortUrl = new ShortUrl({
      full_url: normalizedUrl,
      short_url: shortUrlCode
    });

    await newShortUrl.save();
    
    const PORT = process.env.PORT || 3000;
    res.status(201).json({
        message: "Short URL created successfully",
        shortUrl: `http://localhost:${PORT}/${shortUrlCode}`
    });

  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
