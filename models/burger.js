const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, cond, cb) {
        orm.updateOne('burgers', objColVals, cond, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;