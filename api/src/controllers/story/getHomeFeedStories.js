const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");
const StoryRepo = require("../../repos/story-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

// REVIEW: this is data that will get rendered on HomePage
const getHomeFeedStories = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	const homeFeedStoriesArray = [];

	try {
		const leaderIDsArrayData = await pool.queryToDatabase(
			`
			SELECT
			leader_id
			FROM (
				SELECT
				*,
				ROW_NUMBER() OVER (ORDER BY max DESC) AS index
				FROM (
					SELECT
					MAX(stories.created_at),
					leader_id
					FROM stories
					JOIN (
						SELECT
						*
						FROM following
						WHERE follower_id=$1
					) AS f
					ON stories.user_id=f.leader_id
					GROUP BY leader_id
				) AS s
			) AS o
			WHERE index BETWEEN $2 AND $3;
			`,
			[userID, betweenFront, betweenBack]
		);

		const nextLeaderIDsArrayData = await pool.queryToDatabase(
			`
			SELECT
			leader_id
			FROM (
				SELECT
				*,
				ROW_NUMBER() OVER (ORDER BY max DESC) AS index
				FROM (
					SELECT
					MAX(stories.created_at),
					leader_id
					FROM stories
					JOIN (
						SELECT
						*
						FROM following
						WHERE follower_id=$1
					) AS f
					ON stories.user_id=f.leader_id
					GROUP BY leader_id
				) AS s
			) AS o
            WHERE index > $2
            LIMIT 1;
			`,
			[userID, betweenBack]
		);

		const nextAPIEndpoint = nextLeaderIDsArrayData.rows[0]
			? `/story/feed?page=${page + 1}&size=${size}`
			: null;

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

		res.send({
			contents: homeFeedStoriesArray,
			next: nextAPIEndpoint,
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching stories for your feed",
			},
		});
	}
};

module.exports = getHomeFeedStories;
