const express = require("express");

const pool = require("../pool");

const validateEmail = require("../middlewares/user/validateEmail");
const isEmailInUse = require("../middlewares/user/isEmailInUse");
const isUsernameInUse = require("../middlewares/user/isUsernameInUse");
const hashPassword = require("../middlewares/user/hashPassword");
const authenticateToken = require("../middlewares/user/authenticateToken");
const checkError = require("../middlewares/common/checkError");

const userRegister = require("../controllers/user/userRegister");
const userLogin = require("../controllers/user/userLogin");
const searchUser = require("../controllers/user/searchUser");

const userRouter = express.Router();

// REVIEW: when a user registers, we insert the value and get back the inserted values via RETURNING *
// TODO: then we send back a JWT token with the id and username being the payload of the token
userRouter.post(
	"/user/register",
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	checkError,
	hashPassword,
	userRegister
);

userRouter.post("/user/login", validateEmail, userLogin);

userRouter.post("/search/users", searchUser);

userRouter.get("/profile/user/:userID", async (req, res) => {
	const userID = parseInt(req.params.userID);

	const userData = await pool.queryToDatabase(
		`
		SELECT
		username, 
		full_name,
		avatar_url,
		bio
		FROM users
		WHERE id=$1;
		`,
		[userID]
	);

	const totalFollowers = await pool.queryToDatabase(
		`
		SELECT 
		COUNT(*)::INT
		FROM following
		WHERE leader_id=$1;
		`,
		[userID]
	);

	const totalFollowing = await pool.queryToDatabase(
		`
		SELECT 
		COUNT(*)::INT
		FROM following
		WHERE follower_id=$1;
		`,
		[userID]
	);

	const totalPosts = await pool.queryToDatabase(
		`
		SELECT
		COUNT(*)::INT
		FROM posts
		WHERE posts.user_id=$1;
		`,
		[userID]
	);

	res.send({
		user: userData.rows[0],
		totalFollowers: totalFollowers.rows[0].count,
		totalFollowing: totalFollowing.rows[0].count,
		totalPosts: totalPosts.rows[0].count,
	});
});

userRouter.get("/profile/content/:userID", async (req, res) => {
	const userPostsDataArray = [];

	const userID = parseInt(req.params.userID);

	const postIDsData = await pool.queryToDatabase(
		`
		SELECT
		posts.id AS id
		FROM posts
		JOIN users
		ON posts.user_id = users.id
		WHERE users.id = $1;
		`,
		[userID]
	);

	const postIDsArray = postIDsData.rows.map((element) => element.id);

	for (let postID of postIDsArray) {
		const imageData = await pool.queryToDatabase(
			`
			SELECT
			pi.image_url AS image_url
			FROM posts
			JOIN (
				SELECT
				posts.id AS post_id,
				post_images.image_url AS image_url
				FROM posts
				JOIN post_images
				ON posts.id=post_images.post_id
				WHERE posts.id=$1
				LIMIT 1
			) AS pi
			ON posts.id = pi.post_id
			WHERE posts.id=$1;
			`,
			[postID]
		);

		const totalLikesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM post_likes
			WHERE post_id=$1;
			`,
			[postID]
		);

		const totalCommentsData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)::INT
			FROM comments 
			WHERE post_id=$1;
			`,
			[postID]
		);

		userPostsDataArray.push({
			user_id: userID,
			post_id: postID,
			// REVIEW: fetching 1 image, so I decided to spread it out
			...imageData.rows[0],
			totalLikes: totalLikesData.rows[0].count,
			totalComments: totalCommentsData.rows[0].count,
		});
	}

	res.send(userPostsDataArray);
});

module.exports = userRouter;
