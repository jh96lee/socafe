const pool = require("../../pool");

const getPost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const userID = parseInt(req.params.userID);

	try {
		const postDateData = await pool.queryToDatabase(
			`
			SELECT
			updated_at
			FROM posts
			WHERE id=$1
			`,
			[postID]
		);
		// REVIEW: if a value is returned, then isLiked is true, else it's false
		const postLikeData = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM post_likes
			WHERE user_id=$1 AND post_id=$2
			`,
			[userID, postID]
		);

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
			topic_id AS id,
			title
			FROM topics_posts
			JOIN post_topics
			ON topics_posts.topic_id=post_topics.id
			WHERE post_id=$1;
			`,
			[postID]
		);

		const postUserData = await pool.queryToDatabase(
			`
			SELECT
			users.id AS user_id,
			users.full_name AS full_name,
			users.username AS username,
			users.avatar_url AS avatar_url
			FROM posts
			JOIN users
			ON posts.user_id=users.id
			WHERE posts.id=$1;
			`,
			[postID]
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
			users.username AS username,
			users.full_name AS full_name,
			users.avatar_url as avatar_url
			FROM users_posts
			JOIN users
			ON users_posts.user_id=users.id
			WHERE post_id=$1;
			`,
			[postID]
		);

		const totalPostLikesData = await pool.queryToDatabase(
			`
			SELECT
			COUNT(*) 
			FROM post_likes
			WHERE post_id=$1;
			`,
			[postID]
		);

		const totalPostCommentsData = await pool.queryToDatabase(
			`
			SELECT
			COUNT(*) 
			FROM comments
			WHERE post_id=$1;
			`,
			[postID]
		);

		res.send({
			post_id: postID,
			post_date: postDateData.rows[0].updated_at,
			post_user: postUserData.rows[0],
			post_images: postImagesData.rows,
			post_topics: postTopicsData.rows,
			post_captions: postCaptionsData.rows,
			post_tagged_users: postTaggedUsersData.rows,
			total_post_likes: parseInt(totalPostLikesData.rows[0].count),
			total_post_comments: parseInt(totalPostCommentsData.rows[0].count),
			is_post_liked: postLikeData.rows[0] ? true : false,
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching post data",
			},
		});
	}
};

module.exports = getPost;
