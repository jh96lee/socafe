const pool = require("../../pool");

const likeComment = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const commentID = parseInt(req.params.commentID);

	try {
		await pool.queryToDatabase(
			`
			INSERT INTO comment_likes (user_id, comment_id)
			VALUES ($1, $2);
			`,
			[userID, commentID]
		);

		res.send({ success: "Success" });
	} catch (error) {
		res.send({
			error: {
				catch:
					"There has been an error while registering your like on a comment",
			},
		});
	}
};

module.exports = likeComment;
