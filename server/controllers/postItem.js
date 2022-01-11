var db = require("../database/index.js");
module.exports = {
    PostOne: (req, res) => {
            console.log(req.body);
            db.query(
              "insert into `Items` (`ItemName`,`ItemImage`,`ItemPrice`,`ItemDescription`,`ItemCategory`,`quantity`,`Store_idStore`,`sales_idsales` ) values(?,?,?,?,?,?,?,?)",
              [
                req.body.itemName,
                req.body.itemImage,
                req.body.itemPrice,
                req.body.itemDescription,
                req.body.itemCategory,
                req.body.quantity,
                req.body.Store_idStore,
                req.body.sales_idsales
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

