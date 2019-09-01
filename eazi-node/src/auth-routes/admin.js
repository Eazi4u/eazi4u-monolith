const express = require('express');

const router = express.Router();

router.get('/auth',(req, res, next) => {
    console.log('In a middleware!');
    res.send("<form action='/authenticate' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>");
});

router.post('/authenticate',(req, res, next) => {
    console.log('Execute!!');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;