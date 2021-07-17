const pool = require("../../pool");

const getPost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const userID = parseInt(req.query.userID);

	// REVIEW: if a value is returned, then isLiked is true, else it's false
	const isLiked = await pool.queryToDatabase(
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
		topic_id,
		title
		FROM post_topics
		JOIN topics_posts
		ON post_topics.id = topics_posts.topic_id
		WHERE topics_posts.post_id=$1;
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

	const taggedUsersData = await pool.queryToDatabase(
		`
		SELECT 
		users.id AS user_id,
		users.username AS username,
		users.full_name AS full_name,
		users.avatar_url as avatar_url
		FROM tagging
		JOIN users
		ON tagging.user_id = users.id
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
		post_id: parseInt(postID),
		user: postUserData.rows[0],
		isLiked: isLiked.rows[0] ? true : false,
		images: postImagesData.rows,
		topics: postTopicsData.rows,
		captions: postCaptionsData.rows,
		taggedUsers: taggedUsersData.rows,
		totalLikes: parseInt(totalPostLikesData.rows[0].count),
		totalComments: parseInt(totalPostCommentsData.rows[0].count),
	});
};

module.exports = getPost;
