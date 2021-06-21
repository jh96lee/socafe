const pool = require("../../pool");

const unfollowUser = async (req, res) => {
	const followerID = res.locals.userID;
	const leaderID = parseInt(req.body.leaderID);

	await pool.queryToDatabase(
		`
    DELETE FROM following
    WHERE leader_id=$1 AND follower_id=$2;
    `,
		[leaderID, followerID]
	);

	res.send({ success: "Success" });
};

module.exports = unfollowUser;
