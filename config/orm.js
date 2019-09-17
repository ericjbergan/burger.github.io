var connection = require("./connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (burger_name, cb) {
    var queryString = "INSERT INTO burgers";
    queryString += " (`burger_name`,`devoured`)";
    queryString += " VALUES(?,?)";
    connection.query(queryString, [burger_name, false], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (condition, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE " + condition + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  deleteOne: function (condition, cb) {
    var queryString = "DELETE FROM burgers WHERE " + condition + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object for the model.
module.exports = orm;

