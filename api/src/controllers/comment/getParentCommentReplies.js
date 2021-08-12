const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const getParentCommentReplies = async (req, res) => {
	// REVIEW: this is the visiting user's id
	const userID = parseInt(req.params.userID);
	const parentCommentID = parseInt(req.params.parentCommentID);

	const parentCommentRepliesArray = [];

	const parentCommentRepliesArrayData = await pool.queryToDatabase(
		`
		SELECT 
        id,
		created_at,
		user_id,
        parent_comment_id,
		post_id
        FROM comments
        WHERE parent_comment_id=$1;
        `,
		[parentCommentID]
	);

	for (let parentCommentReply of parentCommentRepliesArrayData.rows) {
		const { id, user_id } = parentCommentReply;

		// REVIEW: this is the reply comment owner's data
		const parentCommentReplyUserData = await UserRepo.getUserByID(user_id);

		const parentCommentReplyNodesArrayData = await pool.queryToDatabase(
			`
	        SELECT
	        node_type,
	        node_value
	        FROM comment_contents
	        WHERE comment_id=$1;
	        `,
			[id]
		);

		const parentCommentReplyTotalLikesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comment_likes 
			WHERE comment_id=$1;
			`,
			[id]
		);

		const parentCommentReplyTotalRepliesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comments
			WHERE parent_comment_id=$1;
			`,
			[id]
		);

		const parentCommentReplyIsLikedData = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM comment_likes
			WHERE user_id=$1 AND comment_id=$2;
			`,
			[userID, id]
		);

		parentCommentRepliesArray.push({
			...parentCommentReply,
			comment_user: parentCommentReplyUserData,
			comment_nodes_array: parentCommentReplyNodesArrayData.rows,
			comment_total_likes: parentCommentReplyTotalLikesData.rows[0].count,
			comment_total_replies: parentCommentReplyTotalRepliesData.rows[0].count,
			comment_is_liked: parentCommentReplyIsLikedData.rows[0] ? true : false,
		});
	}

	res.send(parentCommentRepliesArray);
};

module.exports = getParentCommentReplies;
