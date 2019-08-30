console.log('******** THIS IS NODE BACKEND FOR EAZI4U WEB RECRUITMENT ********');
const http = require('http');

const app = http.createServer((req, res, next) => {
    console.log('Hey')
    res.setHeader('Content-Type', 'text/html');
    res.write('<body><h1>Hello Eazi</h1><body>');
    res.end();
});

app.listen(3001);
