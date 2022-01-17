const express =require("express")
const router = express.Router()

const Email = require('../controllers/Email')

router.route('/email').post(Email.post)

module.exports = router
