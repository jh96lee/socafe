const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const getOtherUsersParentComments = async (req, res) => {
	const userID = parseInt(req.params.userID);
	const postID = parseInt(req.params.postID);

	const otherParentCommentsArray = [];

	const otherParentCommentsArrayData = await pool.queryToDatabase(
		`
        SELECT 
        id,
		created_at,
		user_id,
        parent_comment_id,
		post_id
        FROM comments
        WHERE user_id!=$1 AND post_id=$2 AND parent_comment_id IS NULL;
        `,
		[userID, postID]
	);

	for (let otherParentComment of otherParentCommentsArrayData.rows) {
		const { id, user_id } = otherParentComment;

		const otherParentCommentUserData = await UserRepo.getUserByID(user_id);

		const otherParentCommentNodesArrayData = await pool.queryToDatabase(
			`
				SELECT
				node_type, 
				node_value
				FROM comment_contents
				WHERE comment_id=$1;
				`,
			[id]
		);

		const otherParentCommentTotalLikesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comment_likes 
			WHERE comment_id=$1;
			`,
			[id]
		);

		const otherParentCommentTotalRepliesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comments
			WHERE parent_comment_id=$1;
			`,
			[id]
		);

		const otherParentCommentIsLikedData = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM comment_likes
			WHERE user_id=$1 AND comment_id=$2;
			`,
			[userID, id]
		);

		otherParentCommentsArray.push({
			...otherParentComment,
			comment_user: otherParentCommentUserData,
			comment_nodes_array: otherParentCommentNodesArrayData.rows,
			comment_total_likes: otherParentCommentTotalLikesData.rows[0].count,
			comment_total_replies: otherParentCommentTotalRepliesData.rows[0].count,
			comment_is_liked: otherParentCommentIsLikedData.rows[0] ? true : false,
		});
	}

	res.send(otherParentCommentsArray);
};

module.exports = getOtherUsersParentComments;
