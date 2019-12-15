const express = require ("express");
const {requireSignin}= require("../controllers/auth");
const {userById} = require("../controllers/user");
const {getPosts,
       createPost, 
       postsByUser,
       postById,
       isPoster,
       updatePost,
       deletePost,
       photo,
       singlePost,
       like,
       unlike,
       comment,
       uncomment
    } = require("../controllers/post");
//const validator = require("../validator")
const router = express.Router();



router.get("/posts", getPosts); 

//like unlinke
router.put('/post/like',requireSignin,like);
router.put('/post/unlike',requireSignin,unlike);
// comments
router.put("/post/comment", requireSignin, comment);
router.put("/post/uncomment", requireSignin, uncomment);

router.post("/post/new/:userId",requireSignin, createPost);


router.get("/posts/by/:userId",requireSignin, postsByUser);
router.get("/post/:postId",singlePost)
router.put("/post/:postId",requireSignin, isPoster, updatePost); 

router.delete("/post/:postId",requireSignin, isPoster, deletePost); 

//photo
router.get("/post/photo/:postId",photo );

//any route containing  :userId, Our app will first execute userById()
router.param("userId", userById);


//any route containing  :postId, Our app will first execute postById()
router.param("postId", postById);

//router.post("/post", validator.createPostValidator, postController.createPost);
module.exports = router;



