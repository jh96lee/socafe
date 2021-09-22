const pool = require("../../pool");
const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getExplorePosts = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	// REVIEW: string
	const topicIDs = req.query.topics;

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	try {
		const explorePosts = topicIDs
			? await PostRepo.getSpecificExplorePosts(
					topicIDs,
					betweenFront,
					betweenBack
			  )
			: await PostRepo.getDefaultExplorePosts(
					userID,
					betweenFront,
					betweenBack
			  );

		const nextExplorePost = topicIDs
			? await PostRepo.getSpecificNextExplorePost(topicIDs, betweenBack)
			: await PostRepo.getDefaultNextExplorePost(userID, betweenBack);

		const nextAPIEndpoint = !nextExplorePost
			? null
			: topicIDs
			? `/post/explore?page=${page + 1}&size=${size}&topics=${topicIDs}`
			: `/post/explore?page=${page + 1}&size=${size}`;

		const explorePostsArray = [];

		for (let explorePost of explorePosts) {
			const { post_id: postID } = explorePost;

			const postBasics = await PostRepo.getPost(postID);

			const postOwnerData = await pool.queryToDatabase(
				`
                SELECT
                user_id
                FROM posts
                WHERE id=$1
                `,
				[postID]
			);

			const postOwner = await UserRepo.getUserByID(
				postOwnerData.rows[0].user_id
			);

			const postImages = await PostRepo.getPostImages(postID);

			const postTotalLikes = await PostRepo.getPostTotalLikes(postID);

			const postTotalComments = await PostRepo.getPostTotalComments(postID);

			const postIsLiked = await PostRepo.getPostIsLiked(userID, postID);

			const postTopics = await PostRepo.getPostTopics(postID);

			explorePostsArray.push({
				...postBasics,
				post_id: postID,
				post_owner: postOwner,
				post_images: postImages,
				post_topics: postTopics,
				post_total_likes: postTotalLikes,
				post_total_comments: postTotalComments,
				post_is_liked: postIsLiked,
			});
		}

		res.send({
			contents: explorePostsArray,
			next: nextAPIEndpoint,
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching explore related posts",
			},
		});
	}
};

module.exports = getExplorePosts;
