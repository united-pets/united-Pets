var db = require("../database/index.js")
const bcrypt = require('bcrypt');
module.exports={
    Login : (req,res)=>{
        // console.log(req.body)
        db.query('select * from `users` where `firstName` =?',[req.body.firstName],(err,result)=>{
            if(err){
                return res.send("userName wrong")
            }else{
                // console.log(result)
                if(result.length===0){return res.send("userName wrong")}
                bcrypt.compare(req.body.password, result[0].password, (err,response)=>{
                    console.log(result[0].password)
                    console.log(req.body.password);
                    console.log(response);
                    if(!response){
                       return res.send("password is wrong")
                    }else{
                        if(response){
                         res.send(result)
    //                        db.query(
    //                     "SELECT * FROM `Posts` INNER JOIN `users` ON `user_iduser` =  `user_iduser`",
    //                        (err, result) => {
    //                   if (err) {
    //                   console.log(err);
    //                   } else {
    //                    res.send(result);
    //           }
    //       }
    //   );
//       db.query(
//         "SELECT * FROM `Stores` INNER JOIN `users` ON `user_iduser` =  `user_iduser`",
//            (err, result) => {
//       if (err) {
//       console.log(err);
//       } else {
//        res.send(result);
// }
// }
// );
  
                    }
                    }
                  })}
        })
    }
}



