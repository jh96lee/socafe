const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");

const getHomeFeedPosts = async (req, res) => {
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

			const postImagesData = await PostRepo.getPostImages(postID);

			const postOwnerData = await PostRepo.getPostOwner(ownerID);

			const postCaptionsData = await PostRepo.getPostCaptions(postID);

			const postTotalLikesData = await PostRepo.getPostTotalLikes(postID);

			const postTotalCommentsData = await PostRepo.getPostTotalComments(postID);

			const postIsLikedData = await PostRepo.getPostIsLiked(visitorID, postID);

			const postIsBookmarkedData = await PostRepo.getPostIsBookmarked(
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
};

module.exports = getHomeFeedPosts;
