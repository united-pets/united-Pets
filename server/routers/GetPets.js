var express = require("express");
var router = express.Router()
const GetsPets = require('../controllers/GetPets');

router.route("/GetPets/:user_iduser").get(GetsPets.GetPets);

module.exports = router



