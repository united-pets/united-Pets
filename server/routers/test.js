var express = require("express");
var router = express.Router()
const test = require("../controllers/test.js")
router.route("/").get(test.test)

module.exports = router