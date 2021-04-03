const express = require("express");
const CommentRepo = require("../repos/commentRepo");
const { authenticateToken } = require("../middlewares/userMiddleware");

const pool = require("../pool");

const commentRouter = express.Router();

// REVIEW: in the url, most likely we are going to have a post ID param within it

// TODO: adding in comments is private route
commentRouter.post(
	"/upload/comment/:postId",
	authenticateToken,
	async (req, res) => {
		const post_id = req.params.postId;

		const { parent_comment_id, contents, decoded } = req.body;

		const user_id = decoded.id;

		// REVIEW: this SQL statement has RETURNING inside because we need the id of the post that has just been created
		const commentData = await CommentRepo.createComment(
			parent_comment_id,
			user_id,
			post_id
		);

		const comment_id = commentData.id;

		const commentContentArray = [];

		for (contentObject of contents) {
			const { type, content } = contentObject;

			const commentContentData = await CommentRepo.insertCommentContent(
				type,
				content,
				comment_id
			);

			commentContentArray.push(commentContentData);
		}

		res.send({ ...commentData, contents: commentContentArray });
	}
);

// REVIEW: if you check out IG, there is no edit comment feature, only deleting comments are available
commentRouter.delete(
	"/comment/delete/:commentId",
	authenticateToken,
	async (req, res) => {
		const comment_id = req.params.commentId;

		const { decoded } = req.body;

		const token_user_id = decoded.id;

		const { user_id } = await CommentRepo.fetchBasicCommentData(comment_id);

		console.log(token_user_id, user_id);

		if (token_user_id !== user_id) {
			res.send({ message: "Unauthorized request" });
		} else {
			await CommentRepo.deleteComment(comment_id);

			res.send({ message: "Comment deleted successfully" });
		}
	}
);

// REVIEW: not a private route
commentRouter.get("/comment/parent/:postId", async (req, res) => {
	const post_id = req.params.postId;

	const postParentCommentsArray = [];

	const parentCommentsArray = await CommentRepo.fetchUserDataAndParentCommentData(
		post_id
	);

	for (userData of parentCommentsArray) {
		const { comment_id } = userData;

		// TODO: fetch comment content via comment_contents
		const commentContents = await CommentRepo.fetchCommentContents(comment_id);

		const { rows } = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(likes.id) AS likes
			FROM comments
			JOIN likes
			ON comments.id=likes.comment_id
			WHERE likes.comment_id=$1;
			`,
			[comment_id]
		);

		const total_likes = parseInt(rows[0].likes);

		const commentData = {
			...userData,
			contents: commentContents,
			likes: total_likes,
		};

		postParentCommentsArray.push(commentData);
	}

	res.send(postParentCommentsArray);
});

commentRouter.get("/comment/reply/:commentId", async (req, res) => {
	const parent_comment_id = req.params.commentId;

	const repliesArray = [];

	const userDataAndRepliesData = await CommentRepo.fetchUserDataAndReplyData(
		parent_comment_id
	);

	for (userData of userDataAndRepliesData) {
		const { comment_id } = userData;

		// TODO: fetch comment content via comment_contents
		const commentContents = await CommentRepo.fetchCommentContents(comment_id);

		const { rows } = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(likes.id) AS likes
			FROM comments
			JOIN likes
			ON comments.id=likes.comment_id
			WHERE likes.comment_id=$1;
			`,
			[comment_id]
		);

		const total_likes = parseInt(rows[0].likes);

		const commentData = {
			...userData,
			content: commentContents,
			likes: total_likes,
		};

		repliesArray.push(commentData);
	}

	res.send(repliesArray);
});

module.exports = commentRouter;
