// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, cb) {
    orm.insertOne( burger_name, function(res) {
      cb(res); 
    }); 
  },

  updateOne: function(condition, cb) {
        orm.updateOne(condition, function(res) {
      cb(res);
    });
  },

  deleteOne: function(condition, cb) {
        orm.deleteOne(condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
