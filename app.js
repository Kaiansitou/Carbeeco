//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function (req, res) {
    res.sendFile(__dirname + "/contact.html");
});

app.get("/buy", function (req, res) {
    res.sendFile(__dirname + "/buy.html");
});

app.get("/data", function (req, res) {
    res.sendFile(__dirname + "/data.html");
});

app.get("/monthly", function (req, res) {
    res.sendFile(__dirname + "/monthly.html");
});

app.listen(1000, function () {
    console.log("Server is running on port 1000");
});
