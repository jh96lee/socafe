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

		await pool.queryToDatabase(
			`
			INSERT INTO notifications
			(comment_id, comment_tag_id, post_tag_id, following_id, comment_like_id, post_like_id)
			VALUES
			($1, $2, $3, $4, $5, $6);
			`,
			[null, null, null, null, null, postLikeID]
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
