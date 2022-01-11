var db = require("../database/index.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports={
  
        Signup : (req,res)=>{
                db.query('select `iduser` from users where `firstName`',[req.body.firstName],(err,result)=>{
                    if(result.length!==0){
                        res.json('username exists')
                    }else{
                let sign='insert into `users` (`firstName`,`lastName`,`email`,`phoneNumber`,`password`,`imageUrl`) values (?,?,?,?,?,?) ' 
                bcrypt.hash(req.body.password, saltRounds, function(err, hash){
                    console.log(hash);
                db.query(sign,[req.body.firstName,req.body.lastName,req.body.email,req.body.phoneNumber,hash,req.body.imageUrl],(err,data)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(data)
                        res.send(data)
                    }
                
                })})}
            })}
}