const express = require("express");

const pool = require("../pool");

const UserRepo = require("../repos/user-repo");

const authenticateToken = require("../middlewares/user/authenticateToken");
const validateEmail = require("../middlewares/user/validateEmail");
const isEmailInUse = require("../middlewares/user/isEmailInUse");
const isUsernameInUse = require("../middlewares/user/isUsernameInUse");
const hashPassword = require("../middlewares/user/hashPassword");
const checkError = require("../middlewares/common/checkError");

const registerUser = require("../controllers/user/registerUser");
const loginUser = require("../controllers/user/loginUser");
const searchUser = require("../controllers/user/searchUser");
const getProfileOwner = require("../controllers/user/getProfileOwner");
const getProfilePosts = require("../controllers/user/getProfilePosts");

const destroyImage = require("../utils/image/destroyImage");

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

userRouter.get("/profile/edit", authenticateToken, async (req, res) => {
	const userID = parseInt(res.locals.userID);

	try {
		const userBasicData = await pool.queryToDatabase(
			`
			SELECT 
			id,
			avatar_url, 
			email,
			full_name,
			username
			FROM users
			WHERE id=$1;
			`,
			[userID]
		);

		const userProfileBioData = await UserRepo.getProfileBio(userID);

		res.send({
			...userBasicData.rows[0],
			user_profile_bio_nodes_array: userProfileBioData,
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for your profile data",
			},
		});
	}
});

userRouter.put("/profile/edit/avatar", authenticateToken, async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { prevAvatar, newAvatar } = req.body;

	const defaultAvatarURL =
		"https://res.cloudinary.com/fullstackprojectcloud/image/upload/v1621981182/default_svra7n.png";

	const updatedUserProfileData = await pool.queryToDatabase(
		`
		UPDATE users
		SET 
		avatar_url=$1
		WHERE id=$2
		RETURNING 
		id, 
		avatar_url, 
		email, 
		full_name, 
		username;
		`,
		[newAvatar.avatar_url, userID]
	);

	const updatedAvatarURL = updatedUserProfileData.rows[0].avatar_url;

	if (prevAvatar.avatar_url !== defaultAvatarURL) {
		destroyImage(prevAvatar.id);
	}

	if (updatedAvatarURL === newAvatar.avatar_url) {
		res.send({
			updated_avatar_url: updatedAvatarURL,
			success: "Your avatar has been successfully updated",
		});
	} else {
		res.send({
			error: {
				image: "There has been an error while updating your avatar",
			},
		});
	}
});

module.exports = userRouter;
