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

		const commentOwnerIDData = await pool.queryToDatabase(
			`
			SELECT 
			comments.user_id AS id,
			comments.post_id
			FROM comment_likes
			JOIN comments
			ON comment_likes.comment_id=comments.id
			WHERE comments.id=$1;
			`,
			[commentID]
		);

		const { id, post_id } = commentOwnerIDData.rows[0];

		await pool.queryToDatabase(
			`
			INSERT INTO notifications
			(
				instigator_id, receiver_id, post_id, 
				following_id, post_like_id, comment_like_id, 
				instigated_comment_id, received_comment_id, notification_type
			)
			VALUES 
			($1, $2, $3, $4, $5, $6, $7, $8, $9);
			`,
			[
				userID,
				id,
				post_id,
				null,
				null,
				commentLikeID,
				null,
				commentID,
				"LIKE_COMMENT",
			]
		);

		if (commentLikeID) {
			res.send({ success: "Success" });
		}
	} catch (error) {
		res.send({
			error: {
				catch:
					"There has been an error while registering your like on a comment",
			},
		});
	}
};

module.exports = insertCommentLike;
