var express = require("express");
var router = express.Router()
const update = require("../controllers/updateProfile.js")
router.route(`/editProfil/:iduser`).put(update.Update)

module.exports = router 