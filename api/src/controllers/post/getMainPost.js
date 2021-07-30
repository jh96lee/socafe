const pool = require("../../pool");

const getMainPost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const visitorID = parseInt(req.params.visitorID);

	try {
		const postBasicData = await pool.queryToDatabase(
			`
			SELECT
			updated_at,
			user_id
			FROM posts
			WHERE id=$1;
			`,
			[postID]
		);

		if (!postBasicData.rows[0]) {
			res.send({ post_id: null });
		} else {
			const { user_id, updated_at } = postBasicData.rows[0];
			const ownerID = user_id;

			const postImagesData = await pool.queryToDatabase(
				`
				SELECT 
				image_url AS url, 
				image_width AS width, 
				image_height AS height
				FROM post_images 
				WHERE post_id=$1;
				`,
				[postID]
			);

			const postTopicsData = await pool.queryToDatabase(
				`
				SELECT
				topic_id,
				title
				FROM topics_posts
				JOIN post_topics
				ON topics_posts.topic_id=post_topics.id
				WHERE post_id=$1;
				`,
				[postID]
			);

			const postOwnerData = await pool.queryToDatabase(
				`
				SELECT
				users.id AS user_id,
				users.full_name AS full_name,
				users.username AS username,
				users.avatar_url AS avatar_url
				FROM users
				WHERE id=$1;
				`,
				[ownerID]
			);

			const postCaptionsData = await pool.queryToDatabase(
				`
				SELECT
				node_type,
				node_value
				FROM post_captions
				WHERE post_id=$1;
				`,
				[postID]
			);

			const postTaggedUsersData = await pool.queryToDatabase(
				`
				SELECT
				users.id AS user_id,
				users.full_name AS full_name,
				users.username AS username,
				users.avatar_url AS avatar_url
				FROM users_posts
				JOIN users
				ON users.id=users_posts.user_id
				WHERE post_id=$1;
				`,
				[postID]
			);

			const postTotalLikesData = await pool.queryToDatabase(
				`
				SELECT
				COUNT(*)::INT 
				FROM post_likes
				WHERE post_id=$1;
				`,
				[postID]
			);

			const postTotalCommentsData = await pool.queryToDatabase(
				`
				SELECT
				COUNT(*)::INT
				FROM comments
				WHERE post_id=$1;
				`,
				[postID]
			);

			const postIsLikedData = await pool.queryToDatabase(
				`
				SELECT
				id
				FROM post_likes
				WHERE user_id=$1 AND post_id=$2;
				`,
				[visitorID, postID]
			);

			const postIsBookmarkedData = await pool.queryToDatabase(
				`
				SELECT
				id
				FROM post_bookmarks
				WHERE user_id=$1 AND post_id=$2;
				`,
				[visitorID, postID]
			);

			res.send({
				post_id: postID,
				post_date: updated_at,
				post_owner: postOwnerData.rows[0],
				post_images: postImagesData.rows,
				post_topics: postTopicsData.rows,
				post_captions: postCaptionsData.rows,
				post_tagged_users: postTaggedUsersData.rows,
				post_total_likes: postTotalLikesData.rows[0].count,
				post_total_comments: postTotalCommentsData.rows[0].count,
				post_is_liked: postIsLikedData.rows[0] ? true : false,
				post_is_bookmarked: postIsBookmarkedData.rows[0] ? true : false,
			});
		}
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching post data",
			},
		});
	}
};

module.exports = getMainPost;
