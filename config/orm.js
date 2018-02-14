var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      
      
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    createBurger: function(tableName, value1, cb) {
      var queryString = "INSERT INTO " + tableName + "burger_name VALUES ?";
  
      connection.query(queryString, value1, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

    deleteBurger: function(tableName, id, cb){
    var queryString = "Update " + tableName + " SET devoured = true WHERE id = " + id;

    connection.query(queryString, function(err, res){
        if (err){
            throw(err)
        }
        cb(result)
        
    })
    }
};

module.exports = orm;