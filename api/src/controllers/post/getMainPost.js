const pool = require("../../pool");
const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const getMainPost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const visitorID = parseInt(req.params.visitorID);

	try {
		const post = await PostRepo.getPost(postID);

		if (!post) {
			res.send({ error: { post: "Post does not exist" } });
		} else {
			const { id, created_at } = post;
			const ownerID = id;

			const postImages = await PostRepo.getPostImages(postID);

			const postTopics = await PostRepo.getPostTopics(postID);

			const postOwner = await UserRepo.getUserByID(ownerID);

			const postCaptions = await PostRepo.getPostCaptions(postID);

			const postTaggedUsers = [];

			const taggedUsersID = await PostRepo.getTaggedUsersID(postID);

			for (let taggedUser of taggedUsersID) {
				const user = await UserRepo.getUserByID(taggedUser.id);

				postTaggedUsers.push(user);
			}

			const postTotalLikes = await PostRepo.getPostTotalLikes(postID);

			const postTotalComments = await PostRepo.getPostTotalComments(postID);

			const postIsLiked = await PostRepo.getPostIsLiked(visitorID, postID);

			const postIsBookmarked = await PostRepo.getPostIsBookmarked(
				visitorID,
				postID
			);

			res.send({
				post_id: postID,
				post_date: created_at,
				post_owner: postOwner,
				post_images: postImages,
				post_topics: postTopics,
				post_captions: postCaptions,
				post_tagged_users: postTaggedUsers,
				post_total_likes: postTotalLikes,
				post_total_comments: postTotalComments,
				post_is_liked: postIsLiked,
				post_is_bookmarked: postIsBookmarked,
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
