const express = require("express");
const bcrypt = require("bcryptjs");

const pool = require("../pool");

const UserRepo = require("../repos/user-repo");

const authenticateToken = require("../middlewares/user/authenticateToken");
const validateEmail = require("../middlewares/user/validateEmail");
const isEmailInUse = require("../middlewares/user/isEmailInUse");
const isUsernameInUse = require("../middlewares/user/isUsernameInUse");
const hashPassword = require("../middlewares/user/hashPassword");
const checkError = require("../middlewares/common/checkError");
const {
	cloudinaryConfigMiddleware,
} = require("../middlewares/cloudinaryMiddleware");

const registerUser = require("../controllers/user/registerUser");
const loginUser = require("../controllers/user/loginUser");
const searchUser = require("../controllers/user/searchUser");
const getProfileOwner = require("../controllers/user/getProfileOwner");
const getProfilePosts = require("../controllers/user/getProfilePosts");
const getUserSuggestions = require("../controllers/user/getUserSuggestions");
const putUserAvatar = require("../controllers/user/putUserAvatar");
const getUserEditProfile = require("../controllers/user/getUserEditProfile");
const putUserProfile = require("../controllers/user/putUserProfile");
const putUserPassword = require("../controllers/user/putUserPassword");

const generateToken = require("../utils/user/generateToken");

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

userRouter.get("/profile/user/:ownerUsername/:visitorID", getProfileOwner);

userRouter.get(
	"/profile/posts/:profilePostType/:ownerUsername/:visitorID",
	getProfilePosts
);

userRouter.get("/user/suggestions", authenticateToken, getUserSuggestions);

userRouter.put(
	"/profile/edit/avatar",
	authenticateToken,
	cloudinaryConfigMiddleware,
	putUserAvatar
);

userRouter.get("/profile/edit", authenticateToken, getUserEditProfile);

// REVIEW: edit profile
userRouter.put(
	"/profile/edit",
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	checkError,
	authenticateToken,
	putUserProfile
);

userRouter.put("/profile/edit/password", authenticateToken, putUserPassword);

module.exports = userRouter;
