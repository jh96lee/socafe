const CommentRepo = require("../../repos/comment-repo");

const insertCommentLike = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const commentID = parseInt(req.params.commentID);

	try {
		const commentLike = CommentRepo.insertCommentLike(userID, commentID);

		if (commentLike.id) {
			res.send({ success: "Success" });
		}
	} catch (error) {
		res.send({
			error: {
				catch:
					"There has been an error while registering your like on a comment",
			},
		});
	}
};

module.exports = insertCommentLike;
