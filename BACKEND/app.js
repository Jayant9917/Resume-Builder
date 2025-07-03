import express from 'express';
import connectDB from './src/config/mongo.config.js';
import ShortUrl from './src/models/shortUrl.model.js';
import shorturlRouter from './src/routes/shortUrl.route.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log("MONGODB_URI =", process.env.MONGODB_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// POST endpoint to create short URL
app.use('/api/create', shorturlRouter);

// GET endpoint to redirect
app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const urlEntry = await ShortUrl.findOne({ short_url: id });
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
