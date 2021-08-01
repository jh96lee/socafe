const express = require("express");

const pool = require("../pool");
const authenticateToken = require("../middlewares/user/authenticateToken");

const uploadPost = require("../controllers/post/uploadPost");
const getMainPost = require("../controllers/post/getMainPost");
const getHomeFeedPosts = require("../controllers/post/getHomeFeedPosts");

const postRouter = express.Router();

const PostRepo = require("../repos/post-repo");

postRouter.post("/upload/post", authenticateToken, uploadPost);

postRouter.get("/post/:postID/:visitorID", getMainPost);

postRouter.get("/post/feed", authenticateToken, async (req, res) => {
	const visitorID = parseInt(res.locals.userID);

	const homeFeedPostsArray = [];

	try {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT 
            leader_id AS owner_id,
            posts.id AS post_id,
            ROW_NUMBER() OVER (ORDER BY posts.created_at DESC) AS index
            FROM following 
            JOIN posts
            ON posts.user_id=leader_id
            WHERE follower_id=$1;
            `,
			[visitorID]
		);

		for (let leaderPost of rows) {
			const ownerID = parseInt(leaderPost.owner_id);
			const postID = parseInt(leaderPost.post_id);

			const postImagesData = await PostRepo.getPostImagesData(postID);

			const postOwnerData = await PostRepo.getPostOwnerData(ownerID);

			const postCaptionsData = await PostRepo.getPostCaptionsData(postID);

			const postTotalLikesData = await PostRepo.getPostTotalLikesData(postID);

			const postTotalCommentsData = await PostRepo.getPostTotalCommentsData(
				postID
			);

			const postIsLikedData = await PostRepo.getPostIsLikedData(
				visitorID,
				postID
			);

			const postIsBookmarkedData = await PostRepo.getPostIsBookmarkedData(
				visitorID,
				postID
			);

			homeFeedPostsArray.push({
				post_id: postID,
				post_owner: postOwnerData,
				post_images: postImagesData,
				post_captions: postCaptionsData,
				post_total_likes: postTotalLikesData,
				post_total_comments: postTotalCommentsData,
				post_is_liked: postIsLikedData,
				post_is_bookmarked: postIsBookmarkedData,
			});
		}

		res.send({
			home_feed_posts: homeFeedPostsArray,
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching data for your home feed",
			},
		});
	}
});

module.exports = postRouter;
