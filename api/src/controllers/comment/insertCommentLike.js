const pool = require("../../pool");

const CommentRepo = require("../../repos/comment-repo");

const insertCommentLike = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const commentID = parseInt(req.params.commentID);

	try {
		const commentLikeID = await CommentRepo.insertCommentLike(
			userID,
			commentID
		);

		await pool.queryToDatabase(
			`
			INSERT INTO notifications
			(comment_id, comment_tag_id, post_tag_id, following_id, comment_like_id, post_like_id)
			VALUES
			($1, $2, $3, $4, $5, $6);
			`,
			[null, null, null, null, commentLikeID, null]
		);

		if (commentLikeID) {
			res.send({ success: "Success" });
		}
	} catch (error) {
		console.log(error);
		res.send({
			error: {
				catch:
					"There has been an error while registering your like on a comment",
			},
		});
	}
};

module.exports = insertCommentLike;
