const express = require("express");

const authenticateToken = require("../middlewares/user/authenticateToken");

const uploadPost = require("../controllers/post/uploadPost");
const getMainPost = require("../controllers/post/getMainPost");
const likePost = require("../controllers/post/likePost");
const unlikePost = require("../controllers/post/unlikePost");
const bookmarkPost = require("../controllers/post/bookmarkPost");
const unbookmarkPost = require("../controllers/post/unbookmarkPost");
const getHomeFeedPosts = require("../controllers/post/getHomeFeedPosts");

const postRouter = express.Router();

postRouter.post("/upload/post", authenticateToken, uploadPost);

postRouter.get("/post/:postID/:visitorID", getMainPost);

postRouter.get("/post/feed", authenticateToken, getHomeFeedPosts);

postRouter.post("/post/like/:postID", authenticateToken, likePost);

postRouter.delete("/post/unlike/:postID", authenticateToken, unlikePost);

postRouter.post("/post/bookmark/:postID", authenticateToken, bookmarkPost);

postRouter.delete(
	"/post/unbookmark/:postID",
	authenticateToken,
	unbookmarkPost
);

module.exports = postRouter;
