// This is my backend to test api against frontend
// Phelo Macanda
// 19 October 2019

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
// const router = express.Router();


const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/candidate-login', (req, res, next) => {
    res.send('<form action="/login" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>');
});

app.use('/login', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    res.send('<h1>Hi You have Successfully Logged in!</h1>');
    console.log('In the middleware!');
});

app.listen(3100);