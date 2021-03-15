import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dbModel from './dbModel.js'
const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/instaDB',{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to the Database');
})

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.post('/upload', (req, res) => {
    const data = req.body;
    dbModel.create(data, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.get('/sync', (req, res) => {
    dbModel.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})


app.listen(port, () => {
    console.log('listening at port 9000');
})