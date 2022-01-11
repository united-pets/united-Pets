var db = require("../database/index.js")
module.exports={
    getdata: (req,res) => {
        var query = "SELECT * FROM `users` where `iduser`=? ";
        db.query(query,[req.params.iduser],(err, result) => {
          if(err){
              console.log(err);
          }else{
              res.send(result)
          }
        });
},

}