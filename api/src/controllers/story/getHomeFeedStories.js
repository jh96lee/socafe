const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const getHomeFeedStories = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const homeFeedStoriesArray = [];

	try {
		const leaderIDsArrayData = await pool.queryToDatabase(
			`
			SELECT 
			leader_id
			FROM following
			WHERE follower_id=$1
			`,
			[userID]
		);

		if (leaderIDsArrayData.length === 0) {
			res.send(homeFeedStoriesArray);
		} else {
			for (leader of leaderIDsArrayData.rows) {
				const leaderID = leader.leader_id;

				const storyOwner = await UserRepo.getUserByID(leaderID);

				const storyIDsArrayData = await pool.queryToDatabase(
					`
					SELECT 
					id
					FROM stories
					WHERE user_id=$1;
					`,
					[leaderID]
				);

				const storyURLsArray = storyIDsArrayData.rows.map(({ id }) => {
					return `/story/${storyOwner.id}/${id}`;
				});

				homeFeedStoriesArray.push({
					storyOwner,
					storyIDsArray: storyIDsArrayData.rows.map((idObject) => idObject.id),
					storyURLsArray,
				});
			}

			res.send(homeFeedStoriesArray);
		}
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching stories for your feed",
			},
		});
	}
};

module.exports = getHomeFeedStories;
