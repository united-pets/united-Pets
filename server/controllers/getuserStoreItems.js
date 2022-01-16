var db = require("../database/index.js")
module.exports={
    GetAll: (req, res) => {
        db.query(
            "SELECT * FROM `Items` INNER JOIN `Stores` ON `Store_idStore` = ?",[req.body.Store_idStore],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            }
        );

}}