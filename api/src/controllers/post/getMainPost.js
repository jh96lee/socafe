const pool = require("../../pool");
const PostRepo = require("../../repos/post-repo");

const getMainPost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const visitorID = parseInt(req.params.visitorID);

	try {
		const postBasicData = await PostRepo.getPostBasicData(postID);

		if (!postBasicData) {
			res.send({ post_id: null });
		} else {
			const { user_id, updated_at } = postBasicData;
			const ownerID = user_id;

			const postImagesData = await PostRepo.getPostImagesData(postID);

			const postTopicsData = await PostRepo.getPostTopicsData(postID);

			const postOwnerData = await PostRepo.getPostOwnerData(ownerID);

			const postCaptionsData = await PostRepo.getPostCaptionsData(postID);

			const postTaggedUsersData = await PostRepo.getPostTaggedUsersData(postID);

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

			res.send({
				post_id: postID,
				post_date: updated_at,
				post_owner: postOwnerData,
				post_images: postImagesData,
				post_topics: postTopicsData,
				post_captions: postCaptionsData,
				post_tagged_users: postTaggedUsersData,
				post_total_likes: postTotalLikesData,
				post_total_comments: postTotalCommentsData,
				post_is_liked: postIsLikedData,
				post_is_bookmarked: postIsBookmarkedData,
			});
		}
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching post data",
			},
		});
	}
};

module.exports = getMainPost;
