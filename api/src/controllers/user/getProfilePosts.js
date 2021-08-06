const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const getUserProfilePosts = async (req, res) => {
	const ownerUsername = req.params.ownerUsername;
	const visitorID = parseInt(req.params.visitorID);
	const profilePostType = req.params.profilePostType;

	const profilePostSQL = {
		posts: `SELECT id FROM posts WHERE user_id=$1;`,
		likes: `SELECT post_id AS id FROM post_likes WHERE user_id=$1;`,
		bookmarks: `SELECT post_id AS id FROM post_bookmarks WHERE user_id=$1;`,
		tagged: `SELECT post_id AS id FROM users_posts WHERE user_id=$1;
        `,
	};

	try {
		const profileOwner = await UserRepo.getUserByUsername(ownerUsername);

		if (profileOwner) {
			const ownerID = profileOwner.id;

			const profilePostsArray = [];

			const profilePostIDs = await pool.queryToDatabase(
				profilePostSQL[profilePostType],
				[ownerID]
			);

			const profilePostIDsArray = profilePostIDs.rows.map((post) => {
				return post.id;
			});

			for (let postID of profilePostIDsArray) {
				const postImages = await PostRepo.getPostImages(postID);

				const postTotalLikes = await PostRepo.getPostTotalLikes(postID);

				const postTotalComments = await PostRepo.getPostTotalComments(postID);

				const postIsLiked = await PostRepo.getPostIsLiked(visitorID, postID);

				profilePostsArray.push({
					post_id: postID,
					post_images: postImages,
					post_total_likes: postTotalLikes,
					post_total_comments: postTotalComments,
					post_is_liked: postIsLiked,
				});
			}

			res.send(profilePostsArray);
		} else {
			res.send({
				error: { profile: "User not found" },
			});
		}
	} catch (error) {
		res.send({
			error: {
				catch:
					"There has been an error while fetching for profile related posts",
			},
		});
	}
};

module.exports = getUserProfilePosts;
