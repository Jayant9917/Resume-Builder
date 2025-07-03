import express from 'express';
import { nanoid } from 'nanoid';
import connectDB from './src/config/mongo.config.js';
import shorturl from './src/models/shorturl.model.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

console.log("MONGODB_URI =", process.env.MONGODB_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utility function to ensure URL has protocol
function normalizeUrl(url) {
  if (!/^https?:\/\//i.test(url)) {
    return 'https://' + url;
  }
  return url;
}

// POST endpoint to create short URL
app.post('/api/create', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is required." });
    }

    const normalizedUrl = normalizeUrl(url);
    const shortUrlCode = nanoid(7);

    const newShortUrl = new shorturl({
      full_url: normalizedUrl,
      short_url: shortUrlCode
    });

    await newShortUrl.save();

    res.json({
      shortUrl: `http://localhost:${PORT}/${shortUrlCode}`
    });
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET endpoint to redirect
app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const urlEntry = await shorturl.findOne({ short_url: id });
    if (urlEntry) {
      res.redirect(urlEntry.full_url);
    } else {
      res.status(404).send("URL not found");
    }
  } catch (error) {
    console.error("Error fetching URL:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
