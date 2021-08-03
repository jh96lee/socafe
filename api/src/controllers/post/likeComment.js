const pool = require("../../pool");

const likeComment = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const commentID = parseInt(req.params.commentID);

	await pool.queryToDatabase(
		`
    INSERT INTO comment_likes (user_id, comment_id)
    VALUES ($1, $2);
    `,
		[userID, commentID]
	);

	const likedPostCommentUserData = await pool.queryToDatabase(
		`
        SELECT
        user_id,
        post_id
        FROM comments
        JOIN users
        ON comments.user_id=users.id
        WHERE comments.id=$1;
        `,
		[commentID]
	);

	if (likedPostCommentUserData.rows[0]) {
		const likedPostCommentUserID = likedPostCommentUserData.rows[0].user_id;
		const likedPostCommentPostID = likedPostCommentUserData.rows[0].post_id;

		await pool.queryToDatabase(
			`
            INSERT INTO comment_notifications
            (instigator_id, receiver_id, post_id, post_comment_id, replied_comment_id, reply_comment_id, tagged_comment_id, liked_comment_id, mention_type)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9);
            `,
			[
				userID,
				likedPostCommentUserID,
				likedPostCommentPostID,
				null,
				null,
				null,
				null,
				commentID,
				"like",
			]
		);
	}
};

module.exports = likeComment;
