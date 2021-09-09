const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");

const getTop10Posts = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const { mostBy } = req.params;

	const top10PostsQueryObject = {
		views: `
                SELECT
                p.id,
                COUNT(*)
                FROM (
                    SELECT
                    *
                    FROM posts
                    WHERE user_id=$1
                ) AS p
                JOIN post_views
                ON p.id=post_views.post_id
                GROUP BY p.id
                ORDER BY count DESC
                LIMIT 10;
                `,
		comments: `
                        SELECT
                        p.id,
                        COUNT(*)
                        FROM (
                            SELECT
                            *
                            FROM posts
                            WHERE user_id=$1
                        ) AS p
                        JOIN comments
                        ON p.id=comments.post_id
                        GROUP BY p.id
                        ORDER BY count DESC
                        LIMIT 10;
                        `,
		likes: `
                SELECT
                p.id,
                COUNT(*)
                FROM (
                    SELECT
                    *
                    FROM posts
                    WHERE user_id=$1
                ) AS p
                JOIN post_likes
                ON p.id=post_likes.post_id
                GROUP BY p.id
                ORDER BY count DESC
                LIMIT 10;
                `,
	};

	try {
		const top10PostsArray = [];

		const top10PostsData = await pool.queryToDatabase(
			top10PostsQueryObject[mostBy],
			[userID]
		);

		for (let post of top10PostsData.rows) {
			const { id } = post;

			const postBasics = await PostRepo.getPost(id);

			const postTotalViews = await PostRepo.getPostTotalViews(id);

			const postImages = await PostRepo.getPostImages(id);

			const postTotalLikes = await PostRepo.getPostTotalLikes(id);

			const postTotalComments = await PostRepo.getPostTotalComments(id);

			const postTopics = await PostRepo.getPostTopics(id);

			top10PostsArray.push({
				...postBasics,
				post_total_views: postTotalViews,
				post_images: postImages,
				post_topics: postTopics,
				post_total_likes: postTotalLikes,
				post_total_comments: postTotalComments,
			});
		}

		res.send(top10PostsArray);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for top 10 posts",
			},
		});
	}
};

module.exports = getTop10Posts;
