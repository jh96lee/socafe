const pool = require("../../pool");

const likePost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const userID = parseInt(res.locals.userID);

	try {
		await pool.queryToDatabase(
			`
			INSERT INTO post_likes
			(user_id, post_id)
			VALUES ($1, $2);
			`,
			[userID, postID]
		);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while registering your like on a post",
			},
		});
	}
};

module.exports = likePost;
