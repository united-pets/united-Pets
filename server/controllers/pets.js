var db = require("../database/index.js");

module.exports = {
    PostOne: (req, res) => {
        console.log(req.body);
        db.query( 
            "insert into `pets`( `petsName`,`age`,`race`,`petImgUrl`,`user_iduser`) values(?,?,?,?,?) ",
            [
               
                req.body.petsName,
                req.body.age,
                req.body.race,
                req.body.petImgUrl,
                req.body.user_iduser
            ],
            (err, result) =>{
              if(err){
                  console.log(err);
              }  else{
                res.send(result);
              }

            }
        )
    }
}