const express = require("express");

const pool = require("../pool");

const validateEmail = require("../middlewares/user/validateEmail");
const isEmailInUse = require("../middlewares/user/isEmailInUse");
const isUsernameInUse = require("../middlewares/user/isUsernameInUse");
const hashPassword = require("../middlewares/user/hashPassword");
const authenticateToken = require("../middlewares/user/authenticateToken");
const checkError = require("../middlewares/common/checkError");

const userRegister = require("../controllers/user/userRegister");
const userLogin = require("../controllers/user/userLogin");
const searchUser = require("../controllers/user/searchUser");
const getUserProfileData = require("../controllers/user/getUserProfileData");
const getUserPosts = require("../controllers/user/getUserPosts");

const userRouter = express.Router();

// REVIEW: when a user registers, we insert the value and get back the inserted values via RETURNING *
// TODO: then we send back a JWT token with the id and username being the payload of the token
userRouter.post(
	"/user/register",
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	checkError,
	hashPassword,
	userRegister
);

userRouter.post("/user/login", validateEmail, userLogin);

userRouter.post("/search/users", searchUser);

userRouter.get("/profile/user/:leaderID/:visitorID", getUserProfileData);

userRouter.get("/profile/posts/:userID", getUserPosts);

module.exports = userRouter;
