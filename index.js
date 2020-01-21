const express = require('express');
const bodyParser = require('body-parser')

const testRoute = require('./routes/test.route')

const app = express();

app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: false,
}))

app.use('/', testRoute)

// const test_controller = require('../controllers/test.controller');

 app.use('/', function(req, res, next) {
    console.log(req);
    console.log(`A new request was received at ${new Date()
        .toLocaleString()}`)
        res.send(`<h1>Thanks for hitting my page</h1>`)
}) 

const port = 5000;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})

  

// PART WITHOUT EXPRESS

/*  const http = require('http');
 const fs = require('fs');
 
 const server = http.createServer((req, res) => {
     const url = req.url;
     const method = req.method;
 
     if (url === '/') {
         res.write('<html>')
         res.write('<body><h1>Welcome to my page!</body>')
         res.write('</html>')
         return res.end();
     }
     if (url === '/api' && method === 'POST') {
         const body = [];
         req.on('data', (chunk) => {
             console.log(chunk);
             body.push(chunk);
         });
         req.on('end', () => {
             const parsedBody = Buffer.concat(body).toString();
             const message = parsedBody.split('=')[1];
             fs.writeFile('message.txt', message, () => {
                 res.statusCode = 302;
                 res.setHeader('Location', '/');
                 return res.end();
             });
         });
     }
 
     console.log(req.url, req.method, req.headers);
     res.setHeader('Content-Type', 'text/html');
     res.write('<html>')
     res.write('<h1>Hello!</h1>')
     res.write('</html>')
     res.end();
 });
 
 server.listen(5000);  */
