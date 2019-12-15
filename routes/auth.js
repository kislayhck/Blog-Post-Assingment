const express = require("express");
const {
    signup,
    signin,
    signout,
    socialLogin
} = require("../controllers/auth");

const { userById } = require("../controllers/user");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);


// then use this route for social login
router.post("/social-login", socialLogin);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
