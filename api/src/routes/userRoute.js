const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../pool");
const UserRepo = require("../repos/userRepo");
const validateEmail = require("../middlewares/user/validateEmail");
const isEmailInUse = require("../middlewares/user/isEmailInUse");
const isUsernameInUse = require("../middlewares/user/isUsernameInUse");
const hashPassword = require("../middlewares/user/hashPassword");
const authenticateToken = require("../middlewares/user/authenticateToken");
const checkError = require("../middlewares/common/checkError");

const generateAndSendToken = require("../utils/generateAndSendToken");

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
	async (req, res) => {
		const { fullName, email, username, password } = req.body;

		const avatarURL =
			"https://res.cloudinary.com/fullstackprojectcloud/image/upload/v1621981182/default_svra7n.png";

		try {
			const { rows } = await pool.queryToDatabase(
				`
				INSERT INTO users(full_name, email, username, password, avatar_url)
				VALUES($1, $2, $3, $4, $5)
				RETURNING id, full_name, username, avatar_url;
				`,
				[fullName, email, username, password, avatarURL]
			);

			const user = rows[0];

			if (user) {
				generateAndSendToken(res, {
					id: user.id,
					full_name: user.full_name,
					username: user.username,
					avatar_url: user.avatar_url,
				});
			} else {
				res.send({
					error: {
						general:
							"There has been an error while inserting data into the database",
					},
				});
			}
		} catch (error) {
			res.send({
				error: {
					general: "There has been an error while processing your registration",
				},
			});
		}
	}
);

userRouter.post("/user/login", validateEmail, async (req, res) => {
	const { email, password } = req.body;

	try {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT id, full_name, username, avatar_url, password 
			FROM users
			WHERE email=$1;
			`,
			[email]
		);

		const user = rows[0];

		if (user) {
			// REVIEW: the result variable is either true or false
			bcrypt.compare(password, user.password, (err, result) => {
				if (err) {
					res.send({
						error: {
							general: "There has been an error while validating your password",
						},
					});
				} else if (result) {
					generateAndSendToken(res, {
						id: user.id,
						full_name: user.full_name,
						username: user.username,
						avatar_url: user.avatar_url,
					});
				} else if (!result) {
					res.send({ error: { general: "Invalid email and/or password" } });
				}
			});
		} else if (!user) {
			res.send({ error: { general: "Invalid email and/or password" } });
		}
	} catch (error) {
		res.send({
			message: {
				general: "There has been an error while processing your login",
			},
		});
	}
});

userRouter.put("/user/update", authenticateToken, async (req, res) => {
	const updatedUserArray = [];

	// REVIEW: fetch user id through decoded JWT payload
	const user_id = req.body.decoded.id;

	// TODO: fetch the soon to be updated columns name using Object.keys but exclude decoded from the array
	const columnsToModifyArray = Object.keys(req.body).filter((key) => {
		return key !== "decoded";
	});

	try {
		for (let column of columnsToModifyArray) {
			const updatedUser = await UserRepo.updateUser(
				column,
				req.body[column],
				user_id
			);

			updatedUserArray.push(updatedUser);
		}

		const mostRecentUpdatedUser = updatedUserArray[updatedUserArray.length - 1];

		res.send(mostRecentUpdatedUser);
	} catch (error) {
		res.send({ message: { error: "There has been an error" } });
	}
});

userRouter.delete("/user/delete", authenticateToken, async (req, res) => {
	const user_id = req.body.decoded.id;

	try {
		await UserRepo.deleteUser(user_id);

		res.end();
	} catch (error) {
		res.send({ message: { error: "There has been an error" } });
	}
});

userRouter.post("/search/users", async (req, res) => {
	const { searchInput } = req.body;

	const sqlLikeArray = [
		`${searchInput}%`,
		`%${searchInput}`,
		`%${searchInput}%`,
	];

	try {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT 
			id, full_name, username, avatar_url FROM 
			users 
			WHERE 
			LOWER(username) LIKE $1
			OR
			LOWER(username) LIKE $2
			OR
			LOWER(username) LIKE $3;
			`,
			[...sqlLikeArray]
		);

		res.send(rows);
	} catch (error) {
		res.send({ error: "There has been an error while searching for users" });
	}
});

module.exports = userRouter;
