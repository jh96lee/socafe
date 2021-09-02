const UserRepo = require("../../repos/user-repo");

const getUserEditProfile = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	try {
		const user = await UserRepo.getUserByID(userID);

		const userBio = await UserRepo.getProfileBio(userID);

		res.send({
			...user,
			bio_nodes_array: userBio,
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for your profile data",
			},
		});
	}
};

module.exports = getUserEditProfile;
