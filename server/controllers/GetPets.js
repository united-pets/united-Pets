var db = require("../database/index.js")
module.exports={
    GetPets: (req, res) => {
        db.query(
            "SELECT * FROM `pets` where `user_iduser` = ?",[req.params.user_iduser],
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.send(err)
                } 
                else {
                    res.send(result);
                }
            }
        );
    }
}