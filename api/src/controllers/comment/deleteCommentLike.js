const CommentRepo = require("../../repos/comment-repo");

const deleteCommentLike = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const commentID = parseInt(req.params.commentID);

	try {
		await CommentRepo.deleteCommentLike(userID, commentID);

		res.send({ success: "Success" });
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while deleting your like on a comment",
			},
		});
	}
};

module.exports = deleteCommentLike;
