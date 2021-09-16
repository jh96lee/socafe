const pool = require("../../pool");

const followUser = async (req, res) => {
	const followerID = parseInt(res.locals.userID);
	const leaderID = parseInt(req.params.leaderID);

	try {
		const followingData = await pool.queryToDatabase(
			`
            INSERT INTO following
            (leader_id, follower_id)
            VALUES
            ($1, $2)
			RETURNING id;
            `,
			[leaderID, followerID]
		);

		const followingID = followingData.rows[0].id;

		await pool.queryToDatabase(
			`
			INSERT INTO notifications
			(comment_id, comment_tag_id, post_tag_id, following_id, comment_like_id, post_like_id)
			VALUES
			($1, $2, $3, $4, $5, $6);
			`,
			[null, null, null, followingID, null, null]
		);

		res.send({ success: "Success" });
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while processing your following",
			},
		});
	}
};

module.exports = followUser;
