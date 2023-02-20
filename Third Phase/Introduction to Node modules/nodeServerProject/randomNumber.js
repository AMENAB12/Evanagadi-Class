const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.send(`Your random number is ${randomNum}`);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
//   console.log("it exists");

  module.exports = app;

