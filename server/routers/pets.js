const express =require("express")
const router = express.Router()
const petsControl = require('../controllers/pets')

router.route('/addPets').post(petsControl.PostOne)

module.exports = router;
