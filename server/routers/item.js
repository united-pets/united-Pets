var express = require("express");
var router = express.Router()
const item = require("../controllers/items.js")
router.route("/items").get(item.getAll)
module.exports = router