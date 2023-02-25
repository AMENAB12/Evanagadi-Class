
const express = require('express');
const mysql = require('mysql');

var app = express();



var mysqlConnection = mysql.createConnection({
    
    user: "oct27",
    password: "abeni",
    host: "localhost",
    database: "oct27",
  });

  mysqlConnection.connect((err) => {
    if (err) console.log(err);
    else console.log("Connected");
  });


app.listen(3001, ()=> console.log("listening to: 3001"));