var express = require("express");
var router = express.Router()
const item = require("../controllers/getuserStoreItems")
router.route("/storeItem/:Store_idStore").get(item.GetAll)
router.route("/deleteItem/:idItems").delete(item.delete)
module.exports = router