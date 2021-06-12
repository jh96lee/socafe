const pool = require("../../pool");

const unlikePost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const { userID } = res.locals;

	await pool.queryToDatabase(
		`
    DELETE
    FROM post_likes
    WHERE user_id=$1 AND post_id=$2
    `,
		[userID, postID]
	);
};

module.exports = unlikePost;
