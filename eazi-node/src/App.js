const express = require('express');
const path = require('path');
const admin = require('../src/auth-routes/admin');
const candidateAuth = require('../src/auth-routes/candidateAuth');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


console.log('******** THIS IS NODE BACKEND FOR EAZI4U WEB RECRUITMENT ********');
app.use(admin);
app.use(candidateAuth);

app.use((req, res, next) => {
    res.status(404).send(path.join(__dirname, 'views', 'fileNotFound.html'))
});


app.listen(3001);
