const UserRepo = require("../../repos/user-repo");

const searchUser = async (req, res) => {
	const { searchInput } = req.body;

	try {
		const searchedUsers = await UserRepo.searchUsersByUsername(searchInput);

		res.send(searchedUsers);
	} catch (error) {
		res.send({
			error: {
				searchUser: "There has been an error while searching for users",
			},
		});
	}
};

module.exports = searchUser;
