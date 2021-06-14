const express = require("express");

const pool = require("../pool");
const authenticateToken = require("../middlewares/user/authenticateToken");

const uploadPost = require("../controllers/post/uploadPost");
const getPost = require("../controllers/post/getPost");
const getHomeFeedPosts = require("../controllers/post/getHomeFeedPosts");
const getPostLikes = require("../controllers/post/getPostLikes");

const postRouter = express.Router();

// REVIEW: identify user_id via decoded JWT token
postRouter.post("/upload/post", authenticateToken, uploadPost);

postRouter.get("/post/:postID", getPost);

postRouter.get("/likes/:postID", getPostLikes);

// FIX: fetch posts that a user is following
postRouter.get("/posts/home", getHomeFeedPosts);

module.exports = postRouter;
