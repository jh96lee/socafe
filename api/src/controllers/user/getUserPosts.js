const pool = require("../../pool");

const getUserPosts = async (req, res) => {
	const userPostsDataArray = [];

	const userID = parseInt(req.params.userID);

	const postIDsData = await pool.queryToDatabase(
		`
		SELECT
		posts.id AS id
		FROM posts
		JOIN users
		ON posts.user_id = users.id
		WHERE users.id = $1;
		`,
		[userID]
	);

	const postIDsArray = postIDsData.rows.map((element) => element.id);

	for (let postID of postIDsArray) {
		const imageData = await pool.queryToDatabase(
			`
			SELECT
			pi.image_url AS image_url
			FROM posts
			JOIN (
				SELECT
				posts.id AS post_id,
				post_images.image_url AS image_url
				FROM posts
				JOIN post_images
				ON posts.id=post_images.post_id
				WHERE posts.id=$1
				LIMIT 1
			) AS pi
			ON posts.id = pi.post_id
			WHERE posts.id=$1;
			`,
			[postID]
		);

		const totalLikesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM post_likes
			WHERE post_id=$1;
			`,
			[postID]
		);

		const totalCommentsData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comments 
			WHERE post_id=$1;
			`,
			[postID]
		);

		userPostsDataArray.push({
			user_id: userID,
			post_id: postID,
			// REVIEW: fetching 1 image, so I decided to spread it out
			...imageData.rows[0],
			totalLikes: totalLikesData.rows[0].count,
			totalComments: totalCommentsData.rows[0].count,
		});
	}

	res.send(userPostsDataArray);
};

module.exports = getUserPosts;
