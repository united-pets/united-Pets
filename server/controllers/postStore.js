var db = require("../database/index.js");
module.exports = {
    PostOne: (req, res) => {
            console.log(req.body);
            db.query(
              "insert into `Stores` (`StoreName`,`StoreLogo`,`taxRegistrationNumber`,`taxRegistrationNumbzerImage`,`user_iduser` ) values(?,?,?,?,?)",
              [
                req.body.storeName,
                req.body.storeLogo,
                req.body.taxRegistrationNumber,
                req.body.taxRegistrationNumbzerImage,
                req.body.user_iduser
              ],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  db.query(
                            "SELECT * FROM `Stores` INNER JOIN `users` ON `user_iduser` =  `user_iduser`",
                               (err, result) => {
                          if (err) {
                          console.log(err);
                          } else {
                           res.send(result);
                    }
                    }
                    );
                }
              }
            );
      
        },
};
