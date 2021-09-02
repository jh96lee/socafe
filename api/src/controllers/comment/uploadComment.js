const UserRepo = require("../../repos/user-repo");
const CommentRepo = require("../../repos/comment-repo");

const uploadComment = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const {
		mainPostID,
		mainPostCommentParentCommentID,
		mainPostCommentNodesArray,
	} = req.body;

	try {
		const commentUser = await UserRepo.getUserByID(userID);

		const comment = await CommentRepo.insertComment(
			userID,
			mainPostID,
			mainPostCommentParentCommentID
		);

		const commentID = parseInt(comment.id);

		const commentNodesArray = [];

		for (let node of mainPostCommentNodesArray) {
			const { nodeType, nodeValue, mentionType } = node;

			const revisedNodeType =
				(mentionType === "TAG" && nodeValue[0] === "@") ||
				mentionType === "REPLY"
					? nodeType
					: "SPAN";

			const commentNode = await CommentRepo.insertCommentNode(
				commentID,
				revisedNodeType,
				nodeValue,
				mentionType
			);

			commentNodesArray.push(commentNode);
		}

		res.send({
			...comment,
			comment_user: commentUser,
			comment_nodes_array: commentNodesArray,
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

module.exports = uploadComment;
