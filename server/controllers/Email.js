var db = require("../database/index.js");

const nodemailer = require ('nodemailer')

module.exports={
    post:( (req, res) =>{
        var data = req.body;
        let smpTransport = nodemailer.createTransport({
          service : 'Gmail',
          port: 465,
          auth :{
            user: 'all.in.one.customer.services@gmail.com',
            pass : 'Azerty123+'
          }
        });
        let mailOption ={
          from : 'all.in.one.customer.services@gmail.com',
          to : data.email,
          subject : 'welcome to UnitedPets',
          html: `<h3>thank you for chose our application UnitedPets </h3>
                
          <h3>you can conct us phone : 50915806 </h3> <br/><h3>or our eamil :unitedpetsofficial@yahoo.com</h3>`
        };
        smpTransport.sendMail(mailOption,(err, response) =>{
          if(err){
            res.send('errorrrrr')
          }else{
            res.send('success')
          }
        })
        smpTransport.close()
      })
}


