const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserRepo = require("../repos/userRepo");
const {
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	hashPassword,
	authenticateToken,
} = require("../middlewares/userMiddleware");
const { generateAndSendToken } = require("../utils/generateAndSendToken");

const userRouter = express.Router();

// REVIEW: when a user registers, we insert the value and get back the inserted values via RETURNING *
// TODO: then we send back a JWT token with the id and username being the payload of the token
userRouter.post(
	"/user/register",
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	hashPassword,
	async (req, res) => {
		const userDataObject = req.body;

		if (!userDataObject.avatar_url || userDataObject.avatar_url === "") {
			userDataObject.avatar_url =
				"https://res.cloudinary.com/fullstackprojectcloud/image/upload/v1616322423/default_profile_image_ud6jux.png";
		}

		const user = await UserRepo.registerUser(userDataObject);

		if (user) {
			generateAndSendToken(res, {
				id: user.id,
				first_name: user.first_name,
				last_name: user.last_name,
				avatar_url: user.avatar_url,
				username: user.username,
			});
		} else {
			res.send({ message: "There has been an error" });
		}
	}
);

userRouter.post("/user/login", async (req, res) => {
	const { email, password } = req.body;

	const user = await UserRepo.checkEmailInUse(email);

	if (user) {
		bcrypt.compare(password, user.password, (err, result) => {
			// TODO: if the result is true, then send token and user data
			if (result) {
				generateAndSendToken(res, {
					id: user.id,
					first_name: user.first_name,
					last_name: user.last_name,
					avatar_url: user.avatar_url,
					username: user.username,
				});
			} else {
				res.send({
					message: "Invalid Credentials",
				});
			}
		});
	} else {
		res.send({
			message: "Invalid Credentials",
		});
	}
});

userRouter.put("/user/update", authenticateToken, async (req, res) => {
	const updatedUserArray = [];

	const user_id = req.body.decoded.id;

	const columnsToModifyArray = Object.keys(req.body).filter((key) => {
		return key !== "decoded";
	});

	for (let key of columnsToModifyArray) {
		const updatedUser = await UserRepo.updateUser(key, req.body[key], user_id);

		updatedUserArray.push(updatedUser);
	}

	const mostRecentUpdatedUser = updatedUserArray[updatedUserArray.length - 1];

	res.send(mostRecentUpdatedUser);
});

userRouter.delete("/user/delete", authenticateToken, async (req, res) => {
	const user_id = req.body.decoded.id;

	UserRepo.deleteUser(user_id);

	res.send({
		message: "User deleted",
	});
});

module.exports = userRouter;
