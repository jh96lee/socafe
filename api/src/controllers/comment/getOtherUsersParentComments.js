const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const getOtherUsersParentComments = async (req, res) => {
	const userID = parseInt(req.params.userID);
	const postID = parseInt(req.params.postID);

	const otherUsersCommentsArray = [];

	const otherUsersCommentsArrayData = await pool.queryToDatabase(
		`
        SELECT 
        id,
		created_at,
		user_id,
        parent_comment_id
        FROM comments
        WHERE user_id!=$1 AND post_id=$2 AND parent_comment_id IS NULL;
        `,
		[userID, postID]
	);

	for (let otherUserComment of otherUsersCommentsArrayData.rows) {
		const { id, created_at, user_id, parent_comment_id } = otherUserComment;

		const mainPostCommentUserData = await UserRepo.getUserByID(user_id);

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

		otherUsersCommentsArray.push({
			comment_id: id,
			created_at,
			...mainPostCommentUserData,
			post_id: postID,
			parent_comment_id,
			comment_nodes_array: mainPostCommentNodesArrayData.rows,
			comment_total_likes: mainPostCommentTotalLikesData.rows[0].count,
			comment_total_replies: mainPostCommentTotalRepliesData.rows[0].count,
			comment_is_liked: mainPostCommentIsLikedData.rows[0] ? true : false,
		});
	}

	res.send(otherUsersCommentsArray);
};

module.exports = getOtherUsersParentComments;
