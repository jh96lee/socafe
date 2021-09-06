const pool = require("../../pool");

const getPostViewsStats = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const { contentType } = req.params;
	const nDaysAgo = parseInt(req.params.nDaysAgo);

	const contentViewsQuery =
		contentType === "post"
			? `
                SELECT
                COUNT(*)::INT AS views,
                DATE(post_views.created_at) AS date
                FROM post_views
                JOIN posts
                ON post_views.post_id=posts.id
                WHERE posts.user_id=$1 AND post_views.created_at >= (
                    SELECT (CURRENT_TIMESTAMP - INTERVAL '${nDaysAgo} DAY')::DATE
                )
                GROUP BY DATE(post_views.created_at)
                ORDER BY DATE(post_views.created_at);
                `
			: `
                SELECT
                COUNT(*)::INT AS views,
                DATE(story_views.created_at) AS date
                FROM story_views
                JOIN stories
                ON story_views.story_id=stories.id
                WHERE stories.user_id=$1 AND story_views.created_at >= (
                    SELECT (CURRENT_TIMESTAMP - INTERVAL '${nDaysAgo} DAY')::DATE
                )
                GROUP BY DATE(story_views.created_at)
                ORDER BY DATE(story_views.created_at);
                `;

	try {
		const postViewsStatsArrayData = await pool.queryToDatabase(
			contentViewsQuery,
			[userID]
		);

		res.send(postViewsStatsArrayData.rows);
	} catch (error) {
		console.log(error);
		res.send({
			error: {
				catch:
					"There has been an error while fetching for your post views analytics",
			},
		});
	}
};

module.exports = getPostViewsStats;
