const mysql = require('mysql');
const express = require('express');

app = express();

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'myDBuser',
    password: 'myDBuser',
    database: 'mydb'
  });
  Connection.connect((err) => {
    if (err) console.log(err);
    else console.log("Connected");
  });

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

    let createUser = `CREATE TABLE if not exists User(
      user_id int auto_increment,
      User_name varchar(255) not null,
      User_password varchar(255) not null,
      PRIMARY KEY (user_id)
    )`;

    let createOrders = `CREATE TABLE if not exists orders(
      order_id int auto_increment,
      user_id int,
      product_id int,
      PRIMARY KEY (order_id),
      FOREIGN KEY (user_id) REFERENCES User(user_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;
    

    Connection.query(createProducts, (err, results, fields) => {
        if (err) console.log(err);
      });
      Connection.query(createProductDescription, (err, results, fields) => {
        if (err) console.log(err);
      });
      Connection.query(createProductPrice, (err, results, fields) => {
        if (err) console.log(err);
      });
      Connection.query(createOrders, (err, results, fields) => {
        if (err) console.log(err);
      });

      Connection.query(createUser, (err, results, fields) => {
        if (err) console.log(err);
      });
    
      res.end(message);
    });
    
    app.listen(3001, () => console.log("Listening to : 3001"));

