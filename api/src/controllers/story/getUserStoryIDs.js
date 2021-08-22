const pool = require("../../pool");

const getUserStoryIDs = async (req, res) => {
	const userID = parseInt(req.params.userID);

	try {
		const storyIDsArrayData = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM stories
			WHERE user_id=$1
			`,
			[userID]
		);

		res.send(storyIDsArrayData.rows.map((idObject) => idObject.id));
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching user's story ids",
			},
		});
	}
};

module.exports = getUserStoryIDs;
