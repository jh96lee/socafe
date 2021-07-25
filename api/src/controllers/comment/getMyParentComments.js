const pool = require("../../pool");

const getMyParentComments = async (req, res) => {
	const userID = parseInt(req.params.userID);
	const postID = parseInt(req.params.postID);

	const myCommentsArray = [];

	const myParentCommentsArrayData = await pool.queryToDatabase(
		`
        SELECT 
        id,
		created_at,
		user_id,
        parent_comment_id
        FROM comments
        WHERE user_id=$1 AND post_id=$2 AND parent_comment_id IS NULL;
        `,
		[userID, postID]
	);

	for (let myComment of myParentCommentsArrayData.rows) {
		const { id, created_at, user_id, parent_comment_id } = myComment;

		const mainPostCommentUserData = await pool.queryToDatabase(
			`
			SELECT 
			id AS user_id,  
			username,
			avatar_url
			FROM users
			WHERE id=$1;
			`,
			[user_id]
		);

		const mainPostCommentNodesArrayData = await pool.queryToDatabase(
			`
			SELECT
			node_type, 
			node_value
			FROM comment_contents
			WHERE comment_id=$1;
			`,
			[id]
		);

		const mainPostCommentTotalLikesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comment_likes 
			WHERE comment_id=$1;
			`,
			[id]
		);

		const mainPostCommentTotalRepliesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comments
			WHERE parent_comment_id=$1;
			`,
			[id]
		);

		const mainPostCommentIsLikedData = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM comment_likes
			WHERE user_id=$1 AND comment_id=$2;
			`,
			[userID, id]
		);

		myCommentsArray.push({
			comment_id: id,
			created_at,
			...mainPostCommentUserData.rows[0],
			post_id: postID,
			parent_comment_id,
			comment_nodes_array: mainPostCommentNodesArrayData.rows,
			comment_total_likes: mainPostCommentTotalLikesData.rows[0].count,
			comment_total_replies: mainPostCommentTotalRepliesData.rows[0].count,
			comment_is_liked: mainPostCommentIsLikedData.rows[0] ? true : false,
		});
	}

	res.send(myCommentsArray);
};

module.exports = getMyParentComments;
