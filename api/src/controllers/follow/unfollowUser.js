const pool = require("../../pool");

const unfollowUser = async (req, res) => {
	const followerID = parseInt(res.locals.userID);
	const leaderID = parseInt(req.params.leaderID);

	try {
		await pool.queryToDatabase(
			`
			DELETE 
			FROM following
			WHERE leader_id=$1 AND follower_id=$2;
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

module.exports = unfollowUser;
