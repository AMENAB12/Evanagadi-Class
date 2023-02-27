
const express = require('express');
const mysql = require('mysql');

var app = express();



var mysqlConnection = mysql.createConnection({
    
    user: "oct27",
    password: "abebe",
    host: "localhost",
    database: "oct27",
  });

  mysqlConnection.connect((err) => {
    if (err) console.log(err);
    else console.log("Connected");
  });


app.listen(3001, ()=> console.log("listening to: 3001"));



  app.get("/install", (req, res) => {
    let message = "Tables Created";
    let createProducts = `CREATE TABLE if not exists Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        PRIMARY KEY (product_id)
    )`;
    let createProductDescription = `CREATE TABLE if not exists ProductDescription(
      description_id int auto_increment,
      product_id int(11) not null,
      product_brief_description TEXT not null,
      product_description TEXT not null,
      product_img varchar(255) not null,
      product_link varchar(255) not null,
      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;
    let createProductPrice = `CREATE TABLE if not exists ProductPrice(
      price_id int auto_increment,
      product_id int(11) not null,    
      starting_price varchar(255) not null,
      price_range varchar(255) not null,
      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;
    mysqlConnection.query(createProducts, (err, results, fields) => {
      if (err) console.log(err);
    });
    mysqlConnection.query(createProductDescription, (err, results, fields) => {
      if (err) console.log(err);
    });
    mysqlConnection.query(createProductPrice, (err, results, fields) => {
      if (err) console.log(err);
    });
  
    res.end(message);
  });