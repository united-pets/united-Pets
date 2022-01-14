const express =require("express")
const router = express.Router()
const PostsController= require("../controllers/postItem")

router.route('/add-items-to-store').post(PostsController.PostOne)

module.exports = router;