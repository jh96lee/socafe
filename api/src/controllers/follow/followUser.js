const pool = require("../../pool");

const followUser = async (req, res) => {
	const followerID = res.locals.userID;
	const leaderID = parseInt(req.params.leaderID);

	await pool.queryToDatabase(
		`
		INSERT INTO following (leader_id, follower_id)
		VALUES ($1, $2);
		`,
		[leaderID, followerID]
	);

	res.send({ success: "Success" });
};

module.exports = followUser;
