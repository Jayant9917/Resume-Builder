import express from 'express';

const app = express();
const PORT = 3000;
import { nanoid } from 'nanoid';

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/api/create', (req,res) => {
    const{ url } = req.body;
    console.log(url);
    res.send(nanoid(7));
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

