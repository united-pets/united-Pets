var db = require("../database/index.js");
module.exports = {
  PostOne: (req, res) => {
    console.log(req.body);
    db.query(
      "insert into `Posts` (`AnimalName`,`AnimalDescription`,`AnimalLocalisation`,`AnimalImage`,`user_iduser`) values(?,?,?,?,?)",
      [
        req.body.AnimalImage,
        req.body.AnimalName,
        req.body.AnimalDescription,
        req.body.AnimalLocalisation,
        req.body.user_iduser,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }

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

