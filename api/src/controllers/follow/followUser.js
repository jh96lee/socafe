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
			(
				instigator_id, receiver_id, post_id, 
				following_id, post_like_id, comment_like_id, 
				instigated_comment_id, received_comment_id, notification_type
			)
			VALUES 
			($1, $2, $3, $4, $5, $6, $7, $8, $9);
			`,
			[
				followerID,
				leaderID,
				null,
				followingID,
				null,
				null,
				null,
				null,
				"FOLLOW",
			]
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
