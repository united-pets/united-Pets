const express =require("express")
const router = express.Router()
const PostsController= require("../controllers/posts")

router.route('/addPost').post(PostsController.PostOne)
router.route('/getAll').get(PostsController.GetAll)
// router.route('/searchPost/:searchedPost').get(PostsController.GetSome)
// router.route('/details/:id').get(PostsController.GetDetails)
module.exports = router;