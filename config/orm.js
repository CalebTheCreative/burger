const connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// Object for all SQL statement functions
const orm = {

  selectAll: function (tblName, cb) {
    let queryString = "SELECT * FROM " + tblName + ";";

    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function (tbl, cols, vals, cb) {
    let queryString = "INSERT INTO " + tbl;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  },
  updateOne: function (tbl, objColVals, cond, cb) {
    let queryString = "UPDATE " + tbl;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += cond;

    connection.query(queryString, function(err,res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};

module.exports = orm;