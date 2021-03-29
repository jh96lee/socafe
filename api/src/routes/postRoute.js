const express = require("express");
const PostRepo = require("../repos/postRepo");
const { authenticateToken } = require("../middlewares/userMiddleware");

const postRouter = express.Router();

// TODO: authenticate by using JWT token and identify who wants to upload a post
postRouter.post("/upload/post", authenticateToken, async (req, res) => {
	const { title, post_views, contents, categories, decoded } = req.body;

	const user_id = decoded.id;

	// REVIEW: this SQL statement has RETURNING inside because we need the id of the post that has just been created
	const postData = await PostRepo.uploadPost(title, post_views, user_id);

	const post_id = postData.id;

	for (contentObject of contents) {
		const { type, content } = contentObject;

		await PostRepo.uploadPostContents(type, content, post_id);
	}

	// TODO: we are inserting data into the JOIN table
	for (category_id of categories) {
		PostRepo.insertCategoryAndPostRelation(category_id, post_id);
	}

	res.send({ message: "Post uploaded successfully!" });
});

// TODO: Gotta add in Like aggregation as well
postRouter.get("/post/:postId", async (req, res) => {
	const post_id = req.params.postId;

	const basicPostData = await PostRepo.fetchBasicPostData(post_id);

	// REVIEW: multiple objects/rows are needed for this data
	const postContents = await PostRepo.fetchPostContents(post_id);

	// REVIEW: multiple objects/rows are needed for this data
	const postCategories = await PostRepo.fetchPostCategories(post_id);

	res.send({
		...basicPostData,
		contents: postContents,
		categories: postCategories,
	});
});

// TODO: when updating the post, it will redirect the client to the post page itself and the fetching will happen there
postRouter.put("/post/update/:postId", authenticateToken, async (req, res) => {
	const { title, contents, categories, decoded } = req.body;

	const post_id = req.params.postId;

	const user_id = decoded.id;

	const basicPostData = await PostRepo.fetchBasicPostData(post_id);
	const userIdOfPost = basicPostData.user_id;

	if (user_id !== userIdOfPost) {
		res.send({
			message: "Unauthorized Request",
		});
	} else {
		await PostRepo.updatePostTitle(title, post_id);

		await PostRepo.deleteCategoryPostRelation(post_id);

		await PostRepo.deletePostContent(post_id);

		for (contentObject of contents) {
			const { type, content } = contentObject;

			await PostRepo.uploadPostContents(type, content, post_id);
		}

		for (category_id of categories) {
			await PostRepo.insertCategoryAndPostRelation(category_id, post_id);
		}

		// TODO: send the id of the post that got updated so that we can redirect the user to that specific post
		res.send({ message: "Post updated successfully!", post_id });
	}
});

postRouter.put("/post/views/:postId", async (req, res) => {
	const post_id = req.params.postId;
	console.log(post_id);

	await PostRepo.incrementPostViewsOfPost(post_id);

	res.send({
		message: "updated",
	});
});

module.exports = postRouter;
