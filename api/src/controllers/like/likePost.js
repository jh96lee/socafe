const pool = require("../../pool");

const likePost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const { userID } = res.locals;

	await pool.queryToDatabase(
		`
		INSERT INTO post_likes(user_id, post_id)
		VALUES ($1, $2);
		`,
		[userID, postID]
	);
};

module.exports = likePost;
