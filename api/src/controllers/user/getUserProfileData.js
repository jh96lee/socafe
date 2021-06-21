const pool = require("../../pool");

const getUserProfileData = async (req, res) => {
	// TODO: leaderID is the id of the user that needs his or her data to be fetched
	const leaderID = parseInt(req.params.leaderID);
	const visitorID = parseInt(req.params.visitorID);

	const isFollowing = await pool.queryToDatabase(
		`
		SELECT
		id
		FROM following
		WHERE leader_id=$1 AND follower_id=$2;
		`,
		[leaderID, visitorID]
	);

	const userData = await pool.queryToDatabase(
		`
		SELECT
		username,
		full_name,
		avatar_url,
		bio
		FROM users
		WHERE id=$1;
		`,
		[leaderID]
	);

	const totalFollowers = await pool.queryToDatabase(
		`
		SELECT
		COUNT(*)::INT
		FROM following
		WHERE leader_id=$1;
		`,
		[leaderID]
	);

	const totalFollowing = await pool.queryToDatabase(
		`
		SELECT
		COUNT(*)::INT
		FROM following
		WHERE follower_id=$1;
		`,
		[leaderID]
	);

	const totalPosts = await pool.queryToDatabase(
		`
		SELECT
		COUNT(*)::INT
		FROM posts
		WHERE posts.user_id=$1;
		`,
		[leaderID]
	);

	res.send({
		isFollowing: isFollowing.rows[0] ? true : false,
		...userData.rows[0],
		totalFollowers: totalFollowers.rows[0].count,
		totalFollowing: totalFollowing.rows[0].count,
		totalPosts: totalPosts.rows[0].count,
	});
};

module.exports = getUserProfileData;
