const pool = require("../../pool");

const getHomeFeedPosts = async (req, res) => {
	const { userID } = res.locals;

	// REVIEW: fetch the IDs' of posts that needs to be fetched
	const { rows } = await pool.queryToDatabase(
		`
		SELECT
		id
		FROM posts
		ORDER BY created_at;
		`
	);

	const postIDsArray = rows.map((row) => parseInt(row.id));

	const postsArray = [];

	for (let postID of postIDsArray) {
		const isLiked = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM post_likes
			WHERE user_id=$1 AND post_id=$2
			`,
			[userID, postID]
		);

		const userData = await pool.queryToDatabase(
			`
			SELECT
			users.id AS user_id,
			posts.id AS post_id,
			posts.updated_at AS created_at,
			username,
			full_name,
			avatar_url
			FROM posts
			JOIN users
			ON posts.user_id = users.id
			WHERE posts.id=$1
			`,
			[postID]
		);

		const imageData = await pool.queryToDatabase(
			`
			SELECT
			image_url,
			image_width AS width,
			image_height AS height
			FROM posts
			JOIN post_images
			ON posts.id = post_images.post_id
			JOIN (
				SELECT
				COUNT(*) AS total_images,
				posts.id AS post_id
				FROM posts
				JOIN post_images
				ON posts.id = post_images.post_id
				GROUP BY posts.id
			) AS o
			ON posts.id = o.post_id
			WHERE posts.id=$1
			ORDER BY posts.created_at 
			`,
			[postID]
		);

		const postContentData = await pool.queryToDatabase(
			`
			SELECT
			content_type,
			content
			FROM posts
			JOIN post_contents
			ON posts.id = post_contents.post_id
			WHERE posts.id=$1
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

		postsArray.push({
			post_id: postID,
			user: userData.rows[0],
			isLiked: isLiked.rows[0] ? true : false,
			images: [...imageData.rows],
			// REVIEW: property content is singular because we only want 1 block of content
			content: postContentData.rows[0],
			totalLikes: parseInt(totalPostLikesData.rows[0].count),
			totalComments: parseInt(totalPostCommentsData.rows[0].count),
		});
	}

	res.send(postsArray);
};

module.exports = getHomeFeedPosts;
