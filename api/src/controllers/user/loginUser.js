const pool = require("../../pool");
const bcrypt = require("bcryptjs");

const generateAndSendToken = require("../../utils/generateAndSendToken");

const UserRepo = require("../../repos/user-repo");

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await UserRepo.getUserByEmail(email);

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
			error: {
				catch: "There has been an error while processing your login",
			},
		});
	}
};

module.exports = loginUser;
