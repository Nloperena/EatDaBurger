var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");

const Sequelize = require("sequelize");

// const db = new Sequelize("mysql://root:localhost:3300/burger_db");

// Option 1: Passing parameters separately
const db = new Sequelize("burger_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Connection Test
db.authenticate()
.then(() => console.log("Database is connected..."))
.catch(err => console.log(err))

var app = express();

app.get("/", (req, res) => res.send("BURGER"))

var PORT = process.env.PORT || 3300;

app.listen(PORT, console.log("Server listening on port: " + PORT));


