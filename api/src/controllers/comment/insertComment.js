const UserRepo = require("../../repos/user-repo");
const CommentRepo = require("../../repos/comment-repo");

const insertComment = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const {
		mainPostID,
		mainPostCommentParentCommentID,
		mainPostCommentRepliedCommentID,
		mainPostCommentNodesArray,
	} = req.body;

	try {
		const commentUser = await UserRepo.getUserByID(userID);

		const insertedComment = await CommentRepo.insertComment(
			userID,
			mainPostID,
			mainPostCommentParentCommentID,
			mainPostCommentRepliedCommentID
		);

		const insertedCommentID = parseInt(insertedComment.id);

		const commentNodesArray = [];

		for (let node of mainPostCommentNodesArray) {
			const { nodeType, nodeValue, mentionType } = node;

			const updatedNodeType =
				(mentionType === "TAG" && nodeValue[0] === "@") ||
				mentionType === "REPLY"
					? nodeType
					: "SPAN";

			const commentNode = await CommentRepo.insertCommentNode(
				insertedCommentID,
				updatedNodeType,
				nodeValue,
				mentionType
			);

			commentNodesArray.push(commentNode);
		}

		res.send({
			...insertedComment,
			comment_user: commentUser,
			comment_nodes_array: commentNodesArray,
			comment_total_likes: 0,
			comment_total_replies: 0,
			comment_is_liked: false,
			success: "Success",
		});
	} catch (error) {
		console.log(error);
		res.send({
			error: { catch: "There has been an error while posting your comment" },
		});
	}
};

module.exports = insertComment;
