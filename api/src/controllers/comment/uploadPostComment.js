const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const uploadPostComment = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const {
		mainPostID,
		mainPostCommentParentCommentID,
		mainPostCommentNodesArray,
	} = req.body;

	try {
		const commentUserData = await UserRepo.getUserByID(userID);

		const commentData = await pool.queryToDatabase(
			`
			INSERT INTO comments
		    (user_id, post_id, parent_comment_id)
		    VALUES ($1, $2, $3)
		    RETURNING id, created_at, post_id, parent_comment_id;
			`,
			[userID, mainPostID, mainPostCommentParentCommentID]
		);

		const commentID = parseInt(commentData.rows[0].id);

		const commentNodesArrayData = [];

		for (let node of mainPostCommentNodesArray) {
			const { nodeType, nodeValue, mentionType } = node;

			const revisedNodeType =
				(mentionType === "tag" && nodeValue[0] === "@") ||
				mentionType === "reply"
					? nodeType
					: "SPAN";

			const commentNodeData = await pool.queryToDatabase(
				`
				INSERT INTO comment_contents
				(comment_id, node_type, node_value, mention_type)
				VALUES
				($1, $2, $3, $4)
				RETURNING id, comment_id, node_type, node_value, mention_type;
				`,
				[commentID, revisedNodeType, nodeValue, mentionType]
			);

			commentNodesArrayData.push(commentNodeData.rows[0]);
		}

		res.send({
			...commentData.rows[0],
			comment_user: commentUserData,
			comment_nodes_array: commentNodesArrayData,
			comment_total_likes: 0,
			comment_total_replies: 0,
			comment_is_liked: false,
			success: "Success",
		});
	} catch (error) {
		res.send({
			error: { catch: "There has been an error while posting your comment" },
		});
	}
};

module.exports = uploadPostComment;
