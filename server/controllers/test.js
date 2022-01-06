var db = require("../database/index.js")
module.exports={
    test:(req,res)=>{
        db.query(
            res.send("hellooo")
        )
    }
}