const express = require("express");

const pool = require("../pool");
const authenticateToken = require("../middlewares/user/authenticateToken");

const uploadPost = require("../controllers/post/uploadPost");
const getPost = require("../controllers/post/getPost");
const getHomeFeedPosts = require("../controllers/post/getHomeFeedPosts");

const postRouter = express.Router();

// REVIEW: identify user_id via decoded JWT token
postRouter.post("/upload/post", authenticateToken, uploadPost);

postRouter.get("/post/:postID", getPost);

// FIX: fetch posts that a user is following
postRouter.get("/posts/home", authenticateToken, getHomeFeedPosts);

module.exports = postRouter;
