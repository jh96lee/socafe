const generateAndSendToken = require("../../utils/user/generateAndSendToken");

const UserRepo = require("../../repos/user-repo");

const registerUser = async (req, res) => {
	const { fullName, email, username, password } = req.body;

	try {
		const registeredUser = await UserRepo.insertUser(
			fullName,
			email,
			username,
			password
		);

		const userID = registeredUser.id;

		const { avatar_url } = await UserRepo.insertDefaultAvatar(userID);

		if (registeredUser) {
			const { id, full_name, username } = registeredUser;

			generateAndSendToken(res, {
				id,
				full_name,
				username,
				avatar_url,
			});
		} else {
			res.send({
				error: {
					register: "There has been an error while registering your data",
				},
			});
		}
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while processing your registration",
			},
		});
	}
};

module.exports = registerUser;
