var express = require("express");
var router = express.Router()
const item = require("../controllers/items.js")
router.route("/").get(item.getAll)
module.exports = router