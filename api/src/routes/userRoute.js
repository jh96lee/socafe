const express = require("express");

const pool = require("../pool");

const validateEmail = require("../middlewares/user/validateEmail");
const isEmailInUse = require("../middlewares/user/isEmailInUse");
const isUsernameInUse = require("../middlewares/user/isUsernameInUse");
const hashPassword = require("../middlewares/user/hashPassword");
const authenticateToken = require("../middlewares/user/authenticateToken");
const checkError = require("../middlewares/common/checkError");

const registerUser = require("../controllers/user/registerUser");
const loginUser = require("../controllers/user/loginUser");
const searchUser = require("../controllers/user/searchUser");
const getUserProfileData = require("../controllers/user/getUserProfileData");
const getUserPosts = require("../controllers/user/getUserPosts");

const userRouter = express.Router();

// TODO: then we send back a JWT token with the id and username being the payload of the token
userRouter.post(
	"/user/register",
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	checkError,
	hashPassword,
	registerUser
);

userRouter.post("/user/login", validateEmail, loginUser);

userRouter.post("/search/users", searchUser);

userRouter.get("/profile/user/:ownerUsername/:visitorID", async (req, res) => {
	const ownerUsername = req.params.ownerUsername;
	const visitorID = parseInt(req.params.visitorID);

	const userProfileOwnerData = await pool.queryToDatabase(
		`
		SELECT
		id,
		username,
		full_name,
		avatar_url
		FROM users
		WHERE username=$1;
		`,
		[ownerUsername]
	);

	if (userProfileOwnerData.rows[0]) {
		const ownerID = userProfileOwnerData.rows[0].id;

		const userProfileTotalPostsData = await pool.queryToDatabase(
			`
			SELECT
			COUNT(*)::INT
			FROM posts
			WHERE user_id=$1
			`,
			[ownerID]
		);

		const userProfileTotalFollowersData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM following 
			WHERE leader_id=$1;
			`,
			[ownerID]
		);

		const userProfileTotalFollowingData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM following 
			WHERE follower_id=$1;
			`,
			[ownerID]
		);

		const userProfileBioData = await pool.queryToDatabase(
			`
			SELECT
			node_type,
			node_value
			FROM user_bios
			WHERE user_id=$1;
			`,
			[ownerID]
		);

		const userProfileFollowingTopicsArrayData = await pool.queryToDatabase(
			`
			SELECT 
			topic_id,
			title,
			topic_url
			FROM topics_users 
			JOIN post_topics
			ON topics_users.topic_id=post_topics.id
			WHERE topics_users.user_id=$1;
			`,
			[ownerID]
		);

		const userProfileIsFollowingData = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM following
			WHERE leader_id=$1 AND follower_id=$2;
			`,
			[ownerID, visitorID]
		);

		res.send({
			...userProfileOwnerData.rows[0],
			user_profile_total_posts: userProfileTotalPostsData.rows[0].count,
			user_profile_total_followers: userProfileTotalFollowersData.rows[0].count,
			user_profile_total_following: userProfileTotalFollowingData.rows[0].count,
			user_profile_following_topics_array:
				userProfileFollowingTopicsArrayData.rows,
			user_profile_bio_nodes_array: userProfileBioData.rows,
			user_profile_is_following: userProfileIsFollowingData.rows[0]
				? true
				: false,
		});
	} else {
		res.send({
			error: {
				profile: "User not found",
			},
		});
	}
});

userRouter.get("/profile/posts/:ownerUsername", async (req, res) => {
	const ownerUsername = req.params.ownerUsername;

	const userProfileOwnerData = await pool.queryToDatabase(
		`
		SELECT
		id
		FROM users
		WHERE username=$1;
		`,
		[ownerUsername]
	);

	if (userProfileOwnerData.rows[0]) {
		const ownerID = userProfileOwnerData.rows[0].id;

		const userProfilePostsArray = [];

		const userProfilePostsData = await pool.queryToDatabase(
			`
			SELECT 
			id 
			FROM posts 
			WHERE user_id=$1;
			`,
			[ownerID]
		);

		const userProfilePostsIDsArray = userProfilePostsData.rows.map(
			(post) => post.id
		);

		for (let postID of userProfilePostsIDsArray) {
			const userProfilePostImagesData = await pool.queryToDatabase(
				`
				SELECT
				image_url,
				image_width,
				image_height
				FROM post_images
				WHERE post_id=$1;
				`,
				[postID]
			);

			const userProfilePostTotalLikesData = await pool.queryToDatabase(
				`
				SELECT 
				COUNT(*)::INT
				FROM post_likes
				WHERE post_id=$1;
				`,
				[postID]
			);

			const userProfilePostTotalCommentsData = await pool.queryToDatabase(
				`
				SELECT
				COUNT(*)::INT
				FROM comments
				WHERE post_id=$1 AND parent_comment_id IS NULL;
				`,
				[postID]
			);

			userProfilePostsArray.push({
				post_id: postID,
				user_profile_post_images: userProfilePostImagesData.rows,
				user_profile_post_total_likes:
					userProfilePostTotalLikesData.rows[0].count,
				user_profile_post_total_comments:
					userProfilePostTotalCommentsData.rows[0].count,
			});
		}

		res.send(userProfilePostsArray);
	} else {
		res.send({
			error: { profile: "User not found" },
		});
	}
});

module.exports = userRouter;
