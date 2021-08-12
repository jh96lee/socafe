const pool = require("../../pool");

const deleteComment = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const commentID = parseInt(req.params.commentID);

	try {
		await pool.queryToDatabase(
			`
            DELETE
            FROM comments
            WHERE id=$1 AND user_id=$2
            `,
			[commentID, userID]
		);

		res.send({ success: "Success" });
	} catch (error) {
		res.send({
			error: { catch: "There has been an error while deleting your comment" },
		});
	}
};

module.exports = deleteComment;
