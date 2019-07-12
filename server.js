var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.get("/", (req, res) => res.send("BURGER"))

var PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("Server listening on port: " + PORT));


