import express from 'express'
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB

// Middleware

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log('Server is running on ');
})

