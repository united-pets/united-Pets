var db = require("../database/index.js")
module.exports={
    GetStore: (req, res) => {
        db.query(
            "SELECT * FROM `Stores` INNER JOIN `users` ON `user_iduser` = ?",[req.params.user_iduser],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            }
        );

}}