const pool = require("../../pool");

const unlikePost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const userID = parseInt(res.locals.userID);

	try {
		await pool.queryToDatabase(
			`
			DELETE FROM post_likes
			WHERE user_id=$1 AND post_id=$2;
			`,
			[userID, postID]
		);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while removing your like on a post",
			},
		});
	}
};

module.exports = unlikePost;
