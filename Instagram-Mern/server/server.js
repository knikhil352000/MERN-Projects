import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
const port = 9000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.listen(port, () => {
    console.log('listening at port 9000');
})