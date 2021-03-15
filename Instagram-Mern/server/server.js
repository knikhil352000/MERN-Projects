import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

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

app.listen(port, () => {
    console.log('listening at port 9000');
})