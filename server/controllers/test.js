var db = require("../database/index.js")
module.exports={
    test:(req,res)=>{
            console.log(req.session)
            res.send("hellooo")
    
    }
}