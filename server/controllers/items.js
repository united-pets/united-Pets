var db = require("../database/index.js")
module.exports={
    getAll: (req,res) => {
        var query = "SELECT * FROM Items";
        db.query(query, (err, result) => {
          if(err){
              console.log(err);
          }else{
              res.send(result)
          }
        });
},

}