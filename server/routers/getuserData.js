var express = require("express");
var router = express.Router()
const item = require("../controllers/getuserData.js")
router.route("/user/:iduser").get(item.getdata)
module.exports = router