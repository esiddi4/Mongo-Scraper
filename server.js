// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongo-scraper");
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});



// Initialize Express
var app = express();

// Configure middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Bring in our routes file into the the server files
// var routes = require('./config/routes.js');

// Incorporate these routes into our app
// app.use('/', routes);



// Set port
var PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});