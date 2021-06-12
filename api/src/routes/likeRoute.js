const express = require("express");

const authenticateToken = require("../middlewares/user/authenticateToken");

const likePost = require("../controllers/like/likePost");
const unlikePost = require("../controllers/like/unlikePost");

const likeRouter = express.Router();

likeRouter.post("/like/post/:postID", authenticateToken, likePost);

likeRouter.delete("/unlike/post/:postID", authenticateToken, unlikePost);

module.exports = likeRouter;
