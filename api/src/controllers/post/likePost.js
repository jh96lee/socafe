const pool = require("../../pool");

const likePost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const userID = parseInt(res.locals.userID);

	try {
		const postLikeIDData = await pool.queryToDatabase(
			`
			INSERT INTO post_likes
			(user_id, post_id)
			VALUES ($1, $2)
			RETURNING id;
			`,
			[userID, postID]
		);

		const postLikeID = postLikeIDData.rows[0].id;

		const postOwnerIDData = await pool.queryToDatabase(
			`
			SELECT 
			posts.user_id AS id
			FROM post_likes
			JOIN posts
			ON post_likes.post_id=posts.id
			WHERE posts.id=$1;
			`,
			[postID]
		);

		const postOwnerID = postOwnerIDData.rows[0].id;

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
				postOwnerID,
				postID,
				null,
				postLikeID,
				null,
				null,
				null,
				"LIKE_POST",
			]
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
