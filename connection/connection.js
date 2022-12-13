var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "ecommerce_sequelize",
    user: "root",
    password: "12345678"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to !");
});

