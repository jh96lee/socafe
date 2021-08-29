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

const registerUser = require("../controllers/user/registerUser");
const loginUser = require("../controllers/user/loginUser");
const searchUser = require("../controllers/user/searchUser");
const getProfileOwner = require("../controllers/user/getProfileOwner");
const getProfilePosts = require("../controllers/user/getProfilePosts");

const destroyImage = require("../utils/image/destroyImage");
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

// FIX: route endpoint
userRouter.get("/profile/edit", authenticateToken, async (req, res) => {
	const userID = parseInt(res.locals.userID);

	try {
		const user = await UserRepo.getUserByID(userID);

		const bio = await UserRepo.getProfileBio(userID);

		res.send({
			...user,
			bio_nodes_array: bio,
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for your profile data",
			},
		});
	}
});

// REVIEW: edit profile
userRouter.put(
	"/profile/edit",
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	checkError,
	authenticateToken,
	async (req, res) => {
		const userID = parseInt(res.locals.userID);

		const { fullName, username, email, bioNodesArray } = req.body;

		try {
			if (fullName) {
				await pool.queryToDatabase(
					`
					UPDATE users
					SET
					full_name=$1
					WHERE id=$2;
					`,
					[fullName, userID]
				);
			}

			if (username) {
				await pool.queryToDatabase(
					`
					UPDATE users
					SET
					username=$1
					WHERE id=$2;
					`,
					[username, userID]
				);
			}

			if (email) {
				await pool.queryToDatabase(
					`
					UPDATE users
					SET
					email=$1
					WHERE id=$2;;
					`,
					[email, userID]
				);
			}

			if (bioNodesArray.length > 0) {
				await pool.queryToDatabase(
					`
					DELETE 
					FROM user_bios
					WHERE user_id=$1
					`,
					[userID]
				);

				for (let node of bioNodesArray) {
					const { nodeType, nodeValue } = node;

					await pool.queryToDatabase(
						`
						INSERT INTO user_bios
						(node_type, node_value, user_id)
						VALUES
						($1, $2, $3);
						`,
						[nodeType, nodeValue, userID]
					);
				}
			}

			const user = await UserRepo.getUserByID(userID);

			if (user) {
				const token = generateToken({
					id: user.id,
					full_name: user.full_name,
					username: user.username,
					avatar_url: user.avatar_url,
				});

				res.send({
					token,
					success: "Success",
				});
			}
		} catch (error) {
			res.send({
				error: { catch: "There has been an error while updating your profile" },
			});
		}
	}
);

userRouter.put("/profile/edit/avatar", authenticateToken, async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { newAvatar } = req.body;

	const prevAvatar = await pool.queryToDatabase(
		`
		SELECT
		image_public_id
		FROM user_avatars
		WHERE user_id=$1
		`,
		[userID]
	);

	const prevAvatarPublicID = prevAvatar.rows[0].image_public_id;

	if (prevAvatarPublicID !== "avatar_default") {
		destroyImage(prevAvatarPublicID);
	}

	const updatedAvatar = await pool.queryToDatabase(
		`
		UPDATE user_avatars
		SET 
		image_public_id=$1,
		avatar_url=$2
		WHERE user_id=$3
		RETURNING
		id,
		image_public_id,
		avatar_url;
		`,
		[newAvatar.id, newAvatar.url, userID]
	);

	const user = await UserRepo.getUserByID(userID);
	const { id, full_name, username, avatar_url } = user;

	if (updatedAvatar.rows[0].avatar_url === newAvatar.url) {
		const token = generateToken({
			id,
			full_name,
			username,
			avatar_url,
		});

		res.send({
			token,
			updated_avatar_url: avatar_url,
			success: "Success",
		});
	} else {
		res.send({
			error: {
				edit: "There has been an error while updating your avatar",
			},
		});
	}
});

userRouter.put(
	"/profile/edit/password",
	authenticateToken,
	async (req, res) => {
		const userID = parseInt(res.locals.userID);

		const { oldPassword, newPassword } = req.body;

		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			password
			FROM users
			WHERE id=$1
			`,
			[userID]
		);

		const { password } = rows[0];

		bcrypt.compare(oldPassword, password, async (err, result) => {
			if (err) {
				res.send({
					error: {
						login: "There has been an error while validating your password",
					},
				});
			} else if (result) {
				const salt = bcrypt.genSaltSync(10);

				const hashedPassword = bcrypt.hashSync(newPassword, salt);

				await pool.queryToDatabase(
					`
					UPDATE users
					SET
					password=$1
					WHERE id=$2;
					`,
					[hashedPassword, userID]
				);

				res.send({
					success: "Success",
				});
			} else if (!result) {
				res.send({
					error: {
						oldPassword:
							"The old password you entered is incorrect. Please try again.",
					},
				});
			}
		});
	}
);

module.exports = userRouter;
