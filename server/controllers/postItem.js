var db = require("../database/index.js");
module.exports = {
    PostOne: (req, res) => {
            console.log(req.body);
            db.query(
              "insert into `Items` (`ItemName`,`ItemImage`,`ItemPrice`,`ItemDescription`,`ItemCategory`,quantity ) values(?,?,?,?,?,?)",
              [
                req.body.itemName,
                req.body.itemImage,
                req.body.itemPrice,
                req.body.itemDescription,
                req.body.itemCategory,
                req.body.itemQuantity
              ],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send(result);
                }
              }
            );
      
        },
};

