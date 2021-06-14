const pool = require("../../pool");

const getPostLikes = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const userID = parseInt(req.query.userID);

	const isLiked = await pool.queryToDatabase(
		`
        SELECT
        id
        FROM post_likes
        WHERE user_id=$1 AND post_id=$2
        `,
		[userID, postID]
	);

	const totalPostLikesData = await pool.queryToDatabase(
		`
        SELECT 
        COUNT(*)
        FROM post_likes
        WHERE post_id=$1;
        `,
		[postID]
	);

	res.send({
		post_id: postID,
		isLiked: isLiked.rows[0] ? true : false,
		totalLikes: parseInt(totalPostLikesData.rows[0].count),
	});
};

module.exports = getPostLikes;
