const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");
const CommentRepo = require("../../repos/comment-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getCommentReplies = async (req, res) => {
	// REVIEW: this is the visiting user's id
	const userID = parseInt(req.params.userID);
	const parentCommentID = parseInt(req.params.parentCommentID);

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	const commentRepliesArray = [];

	const commentReplies = await CommentRepo.getCommentReplies(
		parentCommentID,
		betweenFront,
		betweenBack
	);

	const nextCommentReply = await CommentRepo.getNextCommentReply(
		parentCommentID,
		betweenBack
	);

	const nextAPIEndpoint = nextCommentReply
		? `/comment/reply/${parentCommentID}/${userID}?page=${
				page + 1
		  }&size=${size}`
		: null;

	for (let comment of commentReplies) {
		const { id, user_id } = comment;

		// REVIEW: this is the reply comment owner's data
		const commentUser = await UserRepo.getUserByID(user_id);

		const commentNodesArray = await CommentRepo.getCommentNodesArray(id);

		const commentTotalReplies = await CommentRepo.getCommentTotalReplies(id);

		const commentIsLiked = await CommentRepo.getCommentIsLiked(userID, id);

		commentRepliesArray.push({
			...comment,
			comment_user: commentUser,
			comment_nodes_array: commentNodesArray,
			comment_total_replies: commentTotalReplies,
			comment_is_liked: commentIsLiked,
		});
	}

	res.send({ contents: commentRepliesArray, next: nextAPIEndpoint });
};

module.exports = getCommentReplies;
