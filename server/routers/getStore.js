var express = require("express");
var router = express.Router()
const Store = require("../controllers/getStore")
router.route("/getStore/:user_iduser").get(Store.GetStore)
module.exports = router