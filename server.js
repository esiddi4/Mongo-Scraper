// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");


// Require all models
var Article = require("./models/Article.js");
var Note = require("./models/Note.js");


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongo-scraper");
var connection = mongoose.connection;

connection.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

connection.once('open', function () {
  console.log('Mongoose connection successful.');
});


// Initialize Express
var app = express();

// Static directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Bring in our routes file into the the server files
// var routes = require('./routes');


// Set port
var PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});