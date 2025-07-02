import express from 'express';
import { nanoid } from 'nanoid';
import connectDB from './src/config/mongo.config.js';
const app = express();
const PORT = 3000;

import dotenv from 'dotenv';
dotenv.config();
console.log("MONGODB_URI =", process.env.MONGODB_URI);



app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post('/api/create', (req,res) => {
    const { url }  = req.body;
    console.log(url);
    res.send(nanoid(7));
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on ${PORT}`);
})

