const pool = require("../../pool");

const followUser = async (req, res) => {
	const followerID = parseInt(res.locals.userID);
	const leaderID = parseInt(req.params.leaderID);

	try {
		await pool.queryToDatabase(
			`
            INSERT INTO following
            (leader_id, follower_id)
            VALUES
            ($1, $2);
            `,
			[leaderID, followerID]
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
