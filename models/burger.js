var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(response) {
            cb(response);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(response) {
            cb(response);
        });
    },

    updateOne: function(newVals, condition, cb) {
        orm.updateOne("burgers", newVals, condition, function(response) {
            cb(response);
        });
    }
};

module.exports = burger;