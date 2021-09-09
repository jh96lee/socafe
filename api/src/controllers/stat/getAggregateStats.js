const pool = require("../../pool");

const getAggregateStats = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	try {
		const totalPostsData = await pool.queryToDatabase(
			`
            SELECT
            COUNT(id)::INT
            FROM posts
            WHERE user_id=$1;
            `,
			[userID]
		);

		const totalFollowersData = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(id)::INT
            FROM following 
            WHERE leader_id=$1;
            `,
			[userID]
		);

		const totalLikesData = await pool.queryToDatabase(
			`
            SELECT
            COUNT(posts.id)::INT
            FROM posts
            JOIN post_likes
            ON posts.id=post_likes.post_id
            WHERE posts.user_id=$1;
            `,
			[userID]
		);

		const totalCommentsData = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(comments.id)::INT
            FROM comments
            JOIN posts
            ON comments.post_id=posts.id
            WHERE posts.user_id=$1;
            `,
			[userID]
		);

		res.send({
			stats_total_posts: {
				total_posts: totalPostsData.rows[0].count,
			},
			stats_total_followers: {
				total_followers: totalFollowersData.rows[0].count,
			},
			stats_total_likes: {
				total_likes: totalLikesData.rows[0].count,
			},
			stats_total_comments: {
				total_comments: totalCommentsData.rows[0].count,
			},
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for your totals data",
			},
		});
	}
};

module.exports = getAggregateStats;

const getPercentageChange = (currentValue, pastValue) => {
	const percentage = ((currentValue - pastValue) / pastValue) * 100;

	return percentage;
};
