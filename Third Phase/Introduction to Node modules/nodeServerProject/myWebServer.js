// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello, world!');
//   res.end();
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

/**  Express */

const express = require('express');
const app = express();


app.get('/', (req, res) => {

res.send('Surver is running');

});




app.listen(1234, () => {



  console.log("Request received and processed ");
  
  });