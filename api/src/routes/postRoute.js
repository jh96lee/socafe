const express = require("express");
const PostRepo = require("../repos/postRepo");

const postRouter = express.Router();

// TODO: authenticate by using JWT token and identify who wants to upload a post
postRouter.post("/upload/post", async (req, res) => {
	const postData = req.body;

	const newPost = await PostRepo.uploadPost(postData);

	console.log(newPost);

	res.send(newPost);
});

module.exports = postRouter;
