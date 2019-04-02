var express = require("express");
var mongoose = require("mongoose");
const path = require("path");


var PORT = 3000;

var app = express();
require("../routes/apiRoutes")(app);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScraper"
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});