const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getCommentReplies = async (req, res) => {
	// REVIEW: this is the visiting user's id
	const userID = parseInt(req.params.userID);
	const parentCommentID = parseInt(req.params.parentCommentID);

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	const parentCommentRepliesArray = [];

	const parentCommentRepliesArrayData = await pool.queryToDatabase(
		`
		SELECT
		id,
		created_at,
		user_id,
		parent_comment_id,
		post_id,
		comment_total_likes
		FROM (
			SELECT 
			comments.id,
			comments.created_at,
			comments.user_id,
			comments.post_id,
			comments.parent_comment_id,
			comment_total_likes,
			ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
			FROM comments
			JOIN (
				SELECT
				comments.id,
				COUNT(comment_likes.user_id)::INT AS comment_total_likes
				FROM comments
				LEFT JOIN comment_likes
				ON comments.id=comment_likes.comment_id
				GROUP BY comments.id
				HAVING parent_comment_id=$1
			) AS r
			ON comments.id=r.id
		) AS f
		WHERE index BETWEEN $2 AND $3
		ORDER BY created_at;
        `,
		[parentCommentID, betweenFront, betweenBack]
	);

	const nextReplyData = await pool.queryToDatabase(
		`
		SELECT
		id,
		created_at,
		user_id,
		parent_comment_id,
		post_id,
		comment_total_likes
		FROM (
			SELECT 
			comments.id,
			comments.created_at,
			comments.user_id,
			comments.post_id,
			comments.parent_comment_id,
			comment_total_likes,
			ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
			FROM comments
			JOIN (
				SELECT
				comments.id,
				COUNT(comment_likes.user_id)::INT AS comment_total_likes
				FROM comments
				LEFT JOIN comment_likes
				ON comments.id=comment_likes.comment_id
				GROUP BY comments.id
				HAVING parent_comment_id=$1
			) AS r
			ON comments.id=r.id
		) AS f
		WHERE index > $2
		ORDER BY created_at
		LIMIT 1;
        `,
		[parentCommentID, betweenBack]
	);

	const nextAPIEndpoint = nextReplyData.rows[0]
		? `/comment/reply/${parentCommentID}/${userID}?page=${
				page + 1
		  }&size=${size}`
		: null;

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
			comment_total_replies: parentCommentReplyTotalRepliesData.rows[0].count,
			comment_is_liked: parentCommentReplyIsLikedData.rows[0] ? true : false,
		});
	}

	res.send({ contents: parentCommentRepliesArray, next: nextAPIEndpoint });
};

module.exports = getCommentReplies;
