const express =require("express")
const router = express.Router()
const PostsMobile= require("../controllers/postsMobile")

router.route('/add').post(PostsMobile.Post)

module.exports = router;