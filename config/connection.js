// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgerdb"
});

// var connection = mysql.createConnection({
//   host: "y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "xrraaz1o17wis418",
//   password: "mh6u7iabm9req3sr",
//   database: "r5otf2xm12zxtv7w"
// });


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
