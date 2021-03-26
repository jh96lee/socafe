const express = require("express");
const jwt = require("jsonwebtoken");
const UserRepo = require("../repos/userRepo");
const {
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	hashPassword,
	authenticateToken,
} = require("../middlewares/userMiddleware");

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

		const newUser = await UserRepo.registerUser(userDataObject);

		if (newUser) {
			const jwtToken = jwt.sign(
				{
					id: newUser.id,
					username: newUser.username,
				},
				process.env.JWT_SECRET
			);

			// TODO: sending the token in cookie
			res.cookie("token", jwtToken, { httpOnly: true });

			res.send(jwtToken);

			// res.send(newUser);
		} else {
			res.send({ message: "There has been an error" });
		}
	}
);

userRouter.get("/jwtAuth", authenticateToken, async (req, res) => {
	res.send("You have to access to this data");
});

module.exports = userRouter;

// userRouter.post("/user/register", async (req, res) => {
// 	const emptyArr = [];

// 	const { userArr } = req.body;

// 	for (let name of userArr) {
// 		const newUser = await UserRepo.registerUser(name);

// 		console.log(newUser);

// 		emptyArr.push(newUser);
// 	}

// 	res.send(emptyArr);
// });
