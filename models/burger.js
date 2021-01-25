const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function() {

    },
    updateOne: function() {

    }
}

module.exports = burger;