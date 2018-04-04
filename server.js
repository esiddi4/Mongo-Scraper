// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

// Database configuration
var databaseUrl = "mongo-scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

var PORT = 3000;

// Initialize Express
var app = express();


// Configure middleware
app.use(express.static("public"));
app.use(body.urlencoded({extended: false}));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");




// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongo-scraper");



// Start the server
app.listen(port, function() {
	console.log("Listening on port " + port);
})