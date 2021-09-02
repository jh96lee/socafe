const UserRepo = require("../../repos/user-repo");
const CommentRepo = require("../../repos/comment-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getParentComments = async (req, res) => {
	const userID = parseInt(req.params.userID);
	const postID = parseInt(req.params.postID);

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	const parentCommentsArray = [];

	try {
		const parentComments = await CommentRepo.getParentComments(
			userID,
			postID,
			betweenFront,
			betweenBack
		);

		const nextParentComment = await CommentRepo.getNextParentComment(
			userID,
			postID,
			betweenBack
		);

		const nextAPIEndpoint = nextParentComment
			? `/comment/parent/${postID}/${userID}?page=${page + 1}&size=${size}`
			: null;

		for (let comment of parentComments) {
			const { id, user_id } = comment;

			const commentUser = await UserRepo.getUserByID(user_id);

			const commentNodesArray = await CommentRepo.getCommentNodesArray(id);

			const commentTotalReplies = await CommentRepo.getCommentTotalReplies(id);

			const commentIsLiked = await CommentRepo.getCommentIsLiked(userID, id);

			parentCommentsArray.push({
				...comment,
				comment_user: commentUser,
				comment_nodes_array: commentNodesArray,
				comment_total_replies: commentTotalReplies,
				comment_is_liked: commentIsLiked,
			});
		}

		res.send({ contents: parentCommentsArray, next: nextAPIEndpoint });
	} catch (error) {
		res.send({
			error: {
				catch:
					"There has been an error while fetching for comments of this post",
			},
		});
	}
};

module.exports = getParentComments;
