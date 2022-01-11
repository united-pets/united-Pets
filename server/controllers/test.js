var db = require("../database/index.js")

const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports={
    test:(req,res)=>{
            console.log(req.session)
            res.send("hellooo")
    
    }
}



