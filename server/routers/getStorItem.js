var express = require("express");
var router = express.Router()
const item = require("../controllers/getuserStoreItems")
router.route("/storeItem").get(item.GetAll)
module.exports = router