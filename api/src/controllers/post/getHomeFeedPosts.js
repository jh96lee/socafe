const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getHomeFeedPosts = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	const homeFeedPostsArray = [];

	try {
		const homeFeedPostsArrayData = await pool.queryToDatabase(
			`
			SELECT
			id AS post_id,
			created_at, 
			user_id AS owner_id
			FROM (
				SELECT
				*,
				ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
				FROM posts
				JOIN (
					SELECT 
					leader_id,
					follower_id
					FROM following
					WHERE follower_id=$1
				) AS f
				ON posts.user_id=f.leader_id
			) AS p
			WHERE index BETWEEN $2 AND $3;
            `,
			[userID, betweenFront, betweenBack]
		);

		const nextHomeFeedPostData = await pool.queryToDatabase(
			`
			SELECT
			id AS post_id,
			created_at, 
			user_id AS owner_id
			FROM (
				SELECT
				*,
				ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
				FROM posts
				JOIN (
					SELECT 
					leader_id,
					follower_id
					FROM following
					WHERE follower_id=$1
				) AS f
				ON posts.user_id=f.leader_id
			) AS p
            WHERE index > $2
            LIMIT 1;
			`,
			[userID, betweenBack]
		);

		const nextAPIEndpoint = nextHomeFeedPostData.rows[0]
			? `/post/feed?page=${page + 1}&size=${size}`
			: null;

		for (let homeFeedPost of homeFeedPostsArrayData.rows) {
			const ownerID = parseInt(homeFeedPost.owner_id);
			const postID = parseInt(homeFeedPost.post_id);

			const homeFeedPostImageData = await PostRepo.getPostImages(postID);

			const homeFeedPostOwnerData = await UserRepo.getUserByID(ownerID);

			const homeFeedPostCaptionsData = await PostRepo.getPostCaptions(postID);

			const homeFeedPostTotalLikesData = await PostRepo.getPostTotalLikes(
				postID
			);

			const homeFeedPostTotalCommentsData = await PostRepo.getPostTotalComments(
				postID
			);

			const homeFeedPostIsLikedData = await PostRepo.getPostIsLiked(
				userID,
				postID
			);

			const homeFeedPostIsBookmarkedData = await PostRepo.getPostIsBookmarked(
				userID,
				postID
			);

			homeFeedPostsArray.push({
				post_id: postID,
				post_owner: homeFeedPostOwnerData,
				post_images: homeFeedPostImageData,
				post_captions: homeFeedPostCaptionsData,
				post_total_likes: homeFeedPostTotalLikesData,
				post_total_comments: homeFeedPostTotalCommentsData,
				post_is_liked: homeFeedPostIsLikedData,
				post_is_bookmarked: homeFeedPostIsBookmarkedData,
			});
		}

		res.send({
			contents: homeFeedPostsArray,
			next: nextAPIEndpoint,
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
