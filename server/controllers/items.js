var db = require("../database/index.js")
module.exports={
    getAll: (callback) => {
        var query = `SELECT * FROM item`;
        db.query(query, (err, Items) => {
          callback(err,Items)
        });
},
}