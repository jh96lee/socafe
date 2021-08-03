const express = require("express");

const validateEmail = require("../middlewares/user/validateEmail");
const isEmailInUse = require("../middlewares/user/isEmailInUse");
const isUsernameInUse = require("../middlewares/user/isUsernameInUse");
const hashPassword = require("../middlewares/user/hashPassword");
const checkError = require("../middlewares/common/checkError");

const registerUser = require("../controllers/user/registerUser");
const loginUser = require("../controllers/user/loginUser");
const searchUser = require("../controllers/user/searchUser");
const getProfileOwnerData = require("../controllers/user/getProfileOwnerData");
const getUserProfilePosts = require("../controllers/user/getUserProfilePosts");

const userRouter = express.Router();

// TODO: then we send back a JWT token with the id and username being the payload of the token
userRouter.post(
	"/user/register",
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	checkError,
	hashPassword,
	registerUser
);

userRouter.post("/user/login", validateEmail, loginUser);

userRouter.post("/search/users", searchUser);

userRouter.get("/profile/user/:ownerUsername/:visitorID", getProfileOwnerData);

userRouter.get(
	"/profile/:profilePostType/:ownerUsername/:visitorID",
	getUserProfilePosts
);

module.exports = userRouter;
