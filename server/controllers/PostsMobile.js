var db = require("../database/index.js");
module.exports = {
    Post: (req, res) => {
            console.log(req.body);
            db.query(
              "insert into `PostsMobile` (`AnimalImage`,`AnimalName`,`AnimalDescription`,`latitude`,`longitude` , `user_iduser` ) values(?,?,?,?,?,?)",
              [
                req.body.AnimalImage,
                req.body.AnimalName,
                req.body.AnimalDescription,
                req.body.latitude,
                req.body.longitude,
                req.body.user_iduser
              ],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                 res.send(result)
      
        }
    }
    );
}}

    
