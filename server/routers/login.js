var express = require("express");
var router = express.Router()
const login = require("../controllers/login.js")
router.route("/login").post(login.Login)
module.exports = router