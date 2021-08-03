const pool = require("../../pool");

const unlikeComment = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const commentID = parseInt(req.params.commentID);

	await pool.queryToDatabase(
		`
        DELETE 
        FROM comment_likes 
        WHERE comment_id=$1 AND user_id=$2;
        `,
		[commentID, userID]
	);

	await pool.queryToDatabase(
		`
        DELETE 
        FROM comment_notifications
        WHERE liked_comment_id=$1 AND instigator_id=$2
        `,
		[commentID, userID]
	);
};

module.exports = unlikeComment;
