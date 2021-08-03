const generateAndSendToken = require("../../utils/generateAndSendToken");

const UserRepo = require("../../repos/user-repo");

const registerUser = async (req, res) => {
	const { fullName, email, username, password } = req.body;

	const defaultAvatarURL =
		"https://res.cloudinary.com/fullstackprojectcloud/image/upload/v1621981182/default_svra7n.png";

	try {
		const registeredUser = await UserRepo.postUserBasics(
			fullName,
			email,
			username,
			password,
			defaultAvatarURL
		);

		if (registeredUser) {
			const { id, full_name, username, avatar_url } = registeredUser;

			generateAndSendToken(res, {
				id,
				full_name,
				username,
				avatar_url,
			});
		} else {
			res.send({
				error: {
					general: "There has been an error while registering your data",
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
