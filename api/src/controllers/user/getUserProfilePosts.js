const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const getUserProfilePosts = async (req, res) => {
	const ownerUsername = req.params.ownerUsername;
	const visitorID = parseInt(req.params.visitorID);
	const profilePostType = req.params.profilePostType;

	const profilePostSQL = {
		posts: `SELECT id FROM posts WHERE user_id=$1;`,
		likes: `SELECT post_id FROM post_likes WHERE user_id=$1;`,
		bookmarks: `SELECT post_id FROM post_bookmarks WHERE user_id=$1;`,
		tagged: `SELECT post_id FROM users_posts WHERE user_id=$1;
        `,
	};

	try {
		const profileOwnerBasicsData = await UserRepo.getProfileOwnerBasics(
			ownerUsername
		);

		if (profileOwnerBasicsData) {
			const ownerID = profileOwnerBasicsData.id;

			const profileOwnerPostsArray = [];

			const profileOwnerPostData = await pool.queryToDatabase(
				profilePostSQL[profilePostType],
				[ownerID]
			);

			const profileOwnerPostIDsArray = profileOwnerPostData.rows.map((post) => {
				return post.post_id || post.id;
			});

			for (let postID of profileOwnerPostIDsArray) {
				const postImagesData = await PostRepo.getPostImages(postID);

				const postTotalLikesData = await PostRepo.getPostTotalLikes(postID);

				const postTotalCommentsData = await PostRepo.getPostTotalComments(
					postID
				);

				const postIsLikedData = await PostRepo.getPostIsLiked(
					visitorID,
					postID
				);

				profileOwnerPostsArray.push({
					post_id: postID,
					post_images: postImagesData,
					post_total_likes: postTotalLikesData,
					post_total_comments: postTotalCommentsData,
					post_is_liked: postIsLikedData,
				});
			}

			res.send(profileOwnerPostsArray);
		} else {
			res.send([]);
		}
	} catch (error) {
		console.log(error);
		res.send({
			error: {
				catch:
					"There has been an error while fetching for profile related posts",
			},
		});
	}
};

module.exports = getUserProfilePosts;
