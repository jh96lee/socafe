const UserRepo = require("../../repos/user-repo");
const CommentRepo = require("../../repos/comment-repo");

const insertComment = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { postID, parentCommentID, repliedCommentID, commentNodesArray } =
		req.body;

	try {
		const commentUser = await UserRepo.getUserByID(userID);

		const insertedComment = await CommentRepo.insertComment(
			userID,
			postID,
			parentCommentID,
			repliedCommentID
		);

		const insertedCommentID = parseInt(insertedComment.id);

		const postCommentNodesArray = [];

		for (let node of commentNodesArray) {
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

			postCommentNodesArray.push(commentNode);
		}

		res.send({
			...insertedComment,
			comment_user: commentUser,
			comment_nodes_array: postCommentNodesArray,
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
