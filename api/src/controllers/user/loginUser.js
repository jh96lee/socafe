const bcrypt = require("bcryptjs");

const generateAndSendToken = require("../../utils/user/generateAndSendToken");

const UserRepo = require("../../repos/user-repo");

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await UserRepo.getUserPassword(email);

		if (user) {
			const { id, full_name, username, avatar_url } = user;

			// REVIEW: the result variable is either true or false
			bcrypt.compare(password, user.password, (err, result) => {
				if (err) {
					res.send({
						error: {
							login: "There has been an error while validating your password",
						},
					});
				} else if (result) {
					generateAndSendToken(res, {
						id,
						full_name,
						username,
						avatar_url,
					});
				} else if (!result) {
					res.send({ error: { login: "Invalid email and/or password" } });
				}
			});
		} else if (!user) {
			res.send({ error: { login: "Invalid email and/or password" } });
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
