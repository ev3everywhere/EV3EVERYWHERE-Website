import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

const app = express();
const PORT = 3000;



//mongo connection through mongoose

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/learnerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser setup

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/' , (req, res) =>
    res.send(`Basic server running at ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`The basic server setup is running on port ${PORT}`)

);