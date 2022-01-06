const express = require("express");
let app=express() ;
const PORT=3000
var cors = require('cors')
var json = require('express-json')
var db = require('./database/index.js')
app.use(cors());
app.use(express.json())  

app.use(express.urlencoded({extended:true}))


app.post("/updateProfile",(req,res)=>{
    console.log(req.body);
 db.query("update users set firstName=?,lastName=?,email=?,phoneNumber=? , adress=? , imageUrl=?  where  iduser='1'",
  [req.body[0].firstName,req.body[0].lastName , req.body[0].email,req.body[0].phoneNumber,req.body[0].adress,req.body[0].imageUrl],(err,result)=>{
     if(err){
         console.log(err);
     }else 
     {
         console.log(res);
     }
 })
})




const server = app.listen(PORT, function(){
    console.log('server is running at %s', server.address().port);
});

