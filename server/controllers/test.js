var db = require("../database/index.js")

const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports={
    test:(req,res)=>{
        db.query(
            res.send("hellooo")
        )
    }
}



