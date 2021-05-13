const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../pool");
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
		const { full_name, email, username, password } = req.body;

		const avatarURL =
			"https://res.cloudinary.com/fullstackprojectcloud/image/upload/v1619825703/Default_Profile_Image_jske9r.png";

		try {
			const { rows } = await pool.queryToDatabase(
				`
				INSERT INTO users(full_name, email, username, password, avatar_url)
				VALUES($1, $2, $3, $4, $5)
				RETURNING id, full_name, username, avatar_url;
				`,
				[full_name, email, username, password, avatarURL]
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
						error:
							"There has been an error with inserting data into the database",
					},
				});
			}
		} catch (error) {
			res.send({
				error: {
					error: "There has been an error during your registration process",
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
							error: "There has been an error while verifying your credentials",
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
					res.send({ error: { error: "Invalid Credentials" } });
				}
			});
		} else if (!user) {
			res.send({ error: { error: "Invalid Credentials" } });
		}
	} catch (error) {
		res.send({
			message: {
				error: "There has been an error while verifying your credentials",
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

module.exports = userRouter;
