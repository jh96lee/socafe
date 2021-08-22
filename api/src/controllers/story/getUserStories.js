const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const getUserStories = async (req, res) => {
	const userID = parseInt(req.params.userID);

	try {
		const storyOwner = await UserRepo.getUserByID(userID);

		if (!storyOwner) {
			res.send({ error: { story: "User not found" } });
		} else {
			const storyIDsArrayData = await pool.queryToDatabase(
				`
				SELECT 
				id
				FROM stories
				WHERE user_id=$1;
				`,
				[userID]
			);

			const storyURLsArray = storyIDsArrayData.rows.map(({ id }) => {
				return `/story/${storyOwner.id}/${id}`;
			});

			res.send({
				storyOwner,
				storyIDsArray: storyIDsArrayData.rows.map((idObject) => idObject.id),
				storyURLsArray,
			});
		}
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for story user data",
			},
		});
	}
};

module.exports = getUserStories;
