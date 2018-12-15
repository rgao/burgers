var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [table], function(error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {

        function questionMarks(valLength) {
            var questionArr = [];
            for (var v = 0; v < valLength; v++) {
                questionArr.push("?");
            }
            return questionArr;
        }

        var colString = " (" + cols.toString() + ")";
        var queryString = "INSERT INTO " + table + colString
            + " VALUES (" + questionMarks(vals.length) + ")";
        console.log(cols.length)
        console.log(vals.length)
        console.log(queryString);

        connection.query(queryString, vals, function(error, result) {
            if (error) throw error;

            cb(result);
        });
    },
    updateOne: function(table, newVals, condition, cb) {

        function colString(colObject) {
            var objArr = [];

            for (var key in colObject) {
                var keyVal = colObject[key];
                objArr.push(key + "=" + keyVal);
            }
            console.log(objArr);
            return objArr.toString();
        }

        var queryString = "UPDATE " + table + " SET " 
        + colString(newVals) + " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function(error, result) {
            if (error) throw error;

            cb(result);
        });
    }
};

module.exports = orm;
