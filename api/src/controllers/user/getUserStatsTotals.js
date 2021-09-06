const pool = require("../../pool");

const getUserStatsTotals = async (req, res) => {
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

		const lastWeekTotalPostsData = await pool.queryToDatabase(
			`
            SELECT
            COUNT(id)::INT
            FROM posts
            WHERE user_id=$1 AND created_at <= (
                SELECT (CURRENT_TIMESTAMP - INTERVAL '7 DAY')::TIMESTAMP
            );
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

		const lastWeekTotalFollowersData = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(id)::INT
            FROM following 
            WHERE leader_id=$1 AND created_at <= (
                SELECT (CURRENT_TIMESTAMP - INTERVAL '7 DAY')::TIMESTAMP
            );
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

		const lastWeekTotalLikesData = await pool.queryToDatabase(
			`
            SELECT
            COUNT(posts.id)::INT
            FROM posts
            JOIN post_likes
            ON posts.id=post_likes.post_id
            WHERE posts.user_id=$1 AND post_likes.created_at <= (
                SELECT (CURRENT_TIMESTAMP - INTERVAL '7 DAY')::TIMESTAMP
            );
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

		const lastWeekTotalCommentsData = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(comments.id)::INT
            FROM comments
            JOIN posts
            ON comments.post_id=posts.id
            WHERE posts.user_id=$1 AND comments.created_at <= (
                SELECT (CURRENT_TIMESTAMP - INTERVAL '7 DAY')::TIMESTAMP
            );
            `,
			[userID]
		);

		res.send({
			stats_total_posts: {
				total_posts: totalPostsData.rows[0].count,
				percentage: lastWeekTotalPostsData.rows[0]
					? getPercentageChange(
							totalPostsData.rows[0].count,
							lastWeekTotalPostsData.rows[0].count
					  )
					: null,
			},
			stats_total_followers: {
				total_followers: totalFollowersData.rows[0].count,
				percentage: lastWeekTotalFollowersData.rows[0]
					? getPercentageChange(
							totalFollowersData.rows[0].count,
							lastWeekTotalFollowersData.rows[0].count
					  )
					: null,
			},
			stats_total_likes: {
				total_likes: totalLikesData.rows[0].count,
				percentage: lastWeekTotalLikesData.rows[0]
					? getPercentageChange(
							totalLikesData.rows[0].count,
							lastWeekTotalLikesData.rows[0].count
					  )
					: null,
			},
			stats_total_comments: {
				total_comments: totalCommentsData.rows[0].count,
				percentage: lastWeekTotalCommentsData.rows[0]
					? getPercentageChange(
							totalCommentsData.rows[0].count,
							lastWeekTotalCommentsData.rows[0].count
					  )
					: null,
			},
		});
	} catch (error) {
		console.log(error);
		res.send({
			error: {
				catch: "There has been an error while fetching for your totals data",
			},
		});
	}
};

module.exports = getUserStatsTotals;

const getPercentageChange = (currentValue, pastValue) => {
	const percentage = ((currentValue - pastValue) / pastValue) * 100;

	return percentage;
};
