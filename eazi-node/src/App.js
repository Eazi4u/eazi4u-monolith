const express = require('express');
const mongoConnect = require('./util/database').mongoConnect;
const path = require('path');
const admin = require('../src/auth-routes/admin');
const candidateAuth = require('../src/auth-routes/candidateAuth');

const bodyParser = require('body-parser');

const app = express();

// var db = null;
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


console.log('******** THIS IS NODE BACKEND FOR EAZI4U WEB RECRUITMENT AUTH ********');
app.use(admin);
app.use(candidateAuth);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'fileNotFound.html'));
});

mongoConnect((client) => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})

