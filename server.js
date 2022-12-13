const express = require('express');

const app = express();
const path = require('path');
const routes = require("./routes/api/index");


// const con = require("./connection/connection.js");
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the database!");
});

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "public")))
app.use("/api", routes)


app.listen(port, async () => {
    console.log(`server is listening on the port no is ${port}`);
    await con.connect();
})