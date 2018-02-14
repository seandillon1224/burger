var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(value1, cb) {
      orm.createBurger("burgers", value1, function(res) {
        cb(res);
      });
    },
    update: function(id, cb) {
      orm.deleteBurger("burgers", id, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;