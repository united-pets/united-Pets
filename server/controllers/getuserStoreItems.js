var db = require("../database/index.js")
module.exports={
    GetAll: (req, res) => {
        db.query(
            "SELECT * FROM `Items` where `Store_idStore` = ?",[req.params.Store_idStore],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            }
        );

    },
    delete :(req, res) =>{
        db.query("DELETE  FROM `Items` WHERE `idItems` = ?",[req.params.idItems],
        (err, result) =>{
            if(err){
                console.log(err);
                res.send(err)
            }else{
                res.send(result)
                console.log(result);
            }
        })
    }

  
}