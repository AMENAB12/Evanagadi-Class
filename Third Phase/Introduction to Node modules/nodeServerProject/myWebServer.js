
/**  Express */
// const fs = require('fs');
const express = require('express');
const random = require("./randomNumber.js");

const app = express();
app.use(random);

app.get('/', (req, res) => {

res.send('Surver is running');

});




app.listen(1234, () => {



  console.log("Request received and processed ");
  
  });