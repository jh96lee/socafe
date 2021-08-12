const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const getMyParentComments = async (req, res) => {
	const userID = parseInt(req.params.userID);
	const postID = parseInt(req.params.postID);

	const myParentCommentsArray = [];

	const myParentCommentsArrayData = await pool.queryToDatabase(
		`
        SELECT 
        id,
		created_at,
		user_id,
        parent_comment_id,
		post_id
        FROM comments
        WHERE user_id=$1 AND post_id=$2 AND parent_comment_id IS NULL;
        `,
		[userID, postID]
	);

	for (let myParentComment of myParentCommentsArrayData.rows) {
		const { id, user_id } = myParentComment;

		const myParentCommentUserData = await UserRepo.getUserByID(user_id);

		const myParentCommentNodesArrayData = await pool.queryToDatabase(
			`
			SELECT
			node_type, 
			node_value
			FROM comment_contents
			WHERE comment_id=$1;
			`,
			[id]
		);

		const myParentCommentTotalLikesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comment_likes 
			WHERE comment_id=$1;
			`,
			[id]
		);

		const myParentCommentTotalRepliesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comments
			WHERE parent_comment_id=$1;
			`,
			[id]
		);

		const myParentCommentIsLikedData = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM comment_likes
			WHERE user_id=$1 AND comment_id=$2;
			`,
			[userID, id]
		);

		myParentCommentsArray.push({
			...myParentComment,
			comment_user: myParentCommentUserData,
			comment_nodes_array: myParentCommentNodesArrayData.rows,
			comment_total_likes: myParentCommentTotalLikesData.rows[0].count,
			comment_total_replies: myParentCommentTotalRepliesData.rows[0].count,
			comment_is_liked: myParentCommentIsLikedData.rows[0] ? true : false,
		});
	}

	res.send(myParentCommentsArray);
};

module.exports = getMyParentComments;
