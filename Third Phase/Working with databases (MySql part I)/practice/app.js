const mysql = require('mysql');
const express = require('express');
var cors = require("cors");

const bodyparser = require("body-parser");

var app = express();
app.use(cors());

// Use  body parser as middle ware
app.use(bodyparser.urlencoded({ extended: true }));

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



    app.post("/addproduct", (req, res) => {
      // console.log(bodyparser.json);
      console.log(req.body.products);
      let orderid = req.body.orderID;
      let productname = req.body.productName;
      let price = req.body.productPrice;
      let description = req.body.Discription;
      let descriptionid = req.body.descriptionID;
      let Productimg = req.body.productimg;
      let producturl = req.body.productUrl;
      let productid = req.body.productID;
      let username = req.body.userName;
      let Userpassword = req.body.userpassword;
      let userid = req.body.userID;
      let FullDescription = req.body.fullDescription;
      

      let addedProductId = 0;

  let sqlAddToorders =
    "INSERT INTO orders (order_id, product_id, user_id) VALUES ('${orderid}' ,' ${productid}', '${userid}')";

    Connection.query(sqlAddToorders, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });    
  });
  // Connection.query(
  //   "SELECT * FROM Products WHERE product_url = '" + orderid + "' ",
  //   (err, rows, fields) => {
  //     addedProductId = rows[0].product_id;
  //     console.log(addedProductId);
  //     if (err) console.log(err);

      // if (addedProductId != 0) {
      //   let sqlAddToProductDescription =
      //     "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('" +
      //     addedProductId +
      //     "', '" +
      //     Brief +
      //     "', '" +
      //     Description +
      //     "', '" +
      //     img +
      //     "', '" +
      //     Url +
      //     "' )";

      //   let sqlAddToProductPrice =
      //     "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('" +
      //     addedProductId +
      //     "', '" +
      //     StartPrice +
      //     "', '" +
      //     PriceRange +
      //     "')";

      //   Connection.query(
      //     sqlAddToProductDescription,
      //     function (err, result) {
      //       if (err) throw err;
      //       console.log("Product description inserted");
      //     }
        // );

  //       Connection.query(sqlAddToProductPrice, function (err, result) {
  //         if (err) throw err;
  //         console.log("Product price inserted");
  //       });
  //     }
  //   }
  // );

    
    app.listen(3001, () => console.log("Listening to : 3001"));
