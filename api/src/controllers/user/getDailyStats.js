const pool = require("../../pool");

const getDailyStats = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	try {
		const totalFollowersData = await pool.queryToDatabase(
			`
            SELECT
            COUNT(*)::INT
            FROM following
            WHERE leader_id=$1;
            `,
			[userID]
		);

		const prevTotalFollowersData = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(*)::INT
            FROM following
            WHERE DATE(created_at) < CURRENT_DATE
            AND leader_id=$1;
            `,
			[userID]
		);

		const totalLikesData = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(*)::INT
            FROM post_likes 
            JOIN posts 
            ON post_likes.post_id=posts.id 
            WHERE posts.user_id=$1;
            `,
			[userID]
		);

		const prevTotalLikesData = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(*)::INT
            FROM post_likes 
            JOIN posts 
            ON post_likes.post_id=posts.id 
            WHERE posts.user_id=$1 AND DATE(post_likes.created_at) < CURRENT_DATE;
            `,
			[userID]
		);

		const totalCommentsData = await pool.queryToDatabase(
			`
            SELECT
            COUNT(*)::INT
            FROM comments
            JOIN posts
            ON comments.post_id=posts.id
            WHERE posts.user_id=$1;
            `,
			[userID]
		);

		const prevTotalCommentsData = await pool.queryToDatabase(
			`
            SELECT
            COUNT(*)::INT
            FROM comments
            JOIN posts
            ON comments.post_id=posts.id
            WHERE posts.user_id=$1 AND DATE(comments.created_at) < CURRENT_DATE;
            `,
			[userID]
		);

		res.send([
			{
				category: "followers",
				daily_gained:
					totalFollowersData.rows[0].count -
					prevTotalFollowersData.rows[0].count,
				percentage: calculatePercentageChange(
					totalFollowersData.rows[0].count,
					prevTotalFollowersData.rows[0].count
				),
			},
			{
				category: "likes",
				daily_gained:
					totalLikesData.rows[0].count - prevTotalLikesData.rows[0].count,
				percentage: calculatePercentageChange(
					totalLikesData.rows[0].count,
					prevTotalLikesData.rows[0].count
				),
			},
			{
				category: "comments",
				daily_gained:
					totalCommentsData.rows[0].count - prevTotalCommentsData.rows[0].count,
				percentage: calculatePercentageChange(
					totalCommentsData.rows[0].count,
					prevTotalCommentsData.rows[0].count
				),
			},
		]);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for your daily stats",
			},
		});
	}
};

const calculatePercentageChange = (currentValue, prevValue) => {
	const changeInValue = currentValue - prevValue;

	const percentage = (changeInValue / prevValue) * 100;

	return percentage;
};

module.exports = getDailyStats;
