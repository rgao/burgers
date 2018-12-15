var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Zubenelakrab",
    database: "burgers_db"
});

connection.connect(function(error) {
    if (error) {
        console.error("error connection: " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;