import express from 'express'
import mongoose from 'mongoose'
import data from './data.js'
const app = express();
const port = 9000;

mongoose.connect('mongodb://localhost:27017/tiktokDB',{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to the Database');
})

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get('/v1/posts', (req, res) => {
    res.status(200).send(data);
})

app.listen(port, () => {
    console.log('listening on localhost 9000');
})