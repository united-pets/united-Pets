var db = require("../database/index.js");
module.exports = {
<<<<<<< HEAD
  PostOne: (req, res) => {
    console.log(req.body);
    db.query(
      "insert into `Posts` (`AnimalName`,`AnimalDescription`,`AnimalLocalisation`,`AnimalImage`) values(?,?,?,?)",
      [
        req.body.AnimalImage,
        req.body.AnimalName,
        req.body.AnimalDescription,
        req.body.AnimalLocalisation,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
=======
    PostOne: (req, res) => {
            console.log(req.body);
            db.query(
              "insert into `Posts` (`AnimalName`,`AnimalDescription`,`AnimalLocalisation`,`AnimalImage` , `user_iduser` ) values(?,?,?,?,?)",
              [
                req.body.AnimalImage,
                req.body.AnimalName,
                req.body.AnimalDescription,
                req.body.AnimalLocalisation,
                req.body.user_iduser
              ],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send(result);
                }
>>>>>>> 2c13a284bb167acf8dc54c9d0d9d1e4b00328a14

        //   db.query("select * from Posts", (err, result) => {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       res.send(result);
        //     }
      }
    );
    //     }
    //   }
    // );
  },

  // GetAll: (req, res) => {
  //     db.query(
  //         "SELECT * FROM Posts INNER JOIN users ON Posts.ownerId = users.userId",
  //         (err, result) => {
  //             if (err) {
  //                 console.log(err);
  //             } else {
  //                 res.send(result);
  //             }
  //         }
  //     );
  // },
  GetAll: (req, res) => {
    db.query("SELECT * FROM Posts", (err, result) => {
      if (!err) {
        res.send(result);
        
      } else {
        console.log(err);
      }
    });
  },
  // GetSome: (req, res) => {
  //   db.query(
  //     "select * from Posts where place= ?",
  //     [req.params.search],
  //     (err, result) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.send(result);
  //       }
  //     }
  //   );
  // },
  GetDetails: (req, res) => {
    db.query(
      "select * from Posts where postId= ?",
      [req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result[0]);
        }
      }
    );
  },
};

