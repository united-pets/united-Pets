var express = require("express");
var router = express.Router()
const sign = require("../controllers/signup.js")
router.route("/signup").post(sign.Signup)
module.exports = router