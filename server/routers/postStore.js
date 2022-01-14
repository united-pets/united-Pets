const express =require("express")
const router = express.Router()
const PostsController= require("../controllers/postStore")

router.route('/form-store').post(PostsController.PostOne)

module.exports = router;