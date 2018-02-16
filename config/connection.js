// Set up MySQL connection.
var mysql = require("mysql");

// mysql://b0eee3b726d6bc:d470811d@us-cdbr-iron-east-05.cleardb.net/heroku_d838a86c021266c?reconnect=true

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burger_db"
// });

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b0eee3b726d6bc",
  password: "d470811d",
  database: "heroku_d838a86c021266c"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
