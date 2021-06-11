const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");
const pool = require("../pool");

const postRouter = express.Router();

// REVIEW: identify user_id via decoded JWT token
postRouter.post("/upload/post", authenticateToken, async (req, res) => {
	const { userID } = res.locals;

	const { imagesArray, categoriesArray, taggedUsersArray, nodesArray } =
		req.body;

	try {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO posts(post_views, user_id)
			VALUES ($1, $2)
			RETURNING posts.id;
			`,
			[0, userID]
		);

		const postID = rows[0].id;

		for (let image of imagesArray) {
			const { url, width, height } = image;

			await pool.queryToDatabase(
				`
				INSERT INTO post_images(image_url, image_width, image_height, post_id)
				VALUES ($1, $2, $3, $4);
				`,
				[url, width, height, postID]
			);
		}

		for (let category of categoriesArray) {
			const { id } = category;

			await pool.queryToDatabase(
				`
				INSERT INTO categories_posts(category_id, post_id)
				VALUES ($1, $2);
				 `,
				[id, postID]
			);
		}

		for (let user of taggedUsersArray) {
			const { id } = user;

			await pool.queryToDatabase(
				`
				INSERT INTO tagging(post_id, comment_id, user_id)
				VALUES ($1, $2, $3);
				`,
				[postID, null, id]
			);
		}

		for (let node of nodesArray) {
			const { type, content } = node;

			await pool.queryToDatabase(
				`
				INSERT INTO post_contents(content_type, content, post_id)
				VALUES ($1, $2, $3);
				`,
				[type, content, postID]
			);
		}

		res.send({ postID, success: "Success" });
	} catch (error) {
		res.send({
			error: {
				post: "There has been an error while adding your post to the database",
			},
		});
	}
});

postRouter.get("/post/:postID", async (req, res) => {
	const postID = req.params.postID;

	const postImagesData = await pool.queryToDatabase(
		`
		SELECT 
		image_url AS url, 
		image_width AS width, 
		image_height AS height
		FROM post_images 
		WHERE post_id=$1;
		`,
		[postID]
	);

	const postCategoriesData = await pool.queryToDatabase(
		`
		SELECT
		category_id,
		title
		FROM post_categories
		JOIN categories_posts
		ON post_categories.id = categories_posts.category_id
		WHERE categories_posts.post_id=$1;
		`,
		[postID]
	);

	const postUserData = await pool.queryToDatabase(
		`
		SELECT
		users.id AS user_id,
		users.full_name AS full_name,
		users.username AS username,
		users.avatar_url AS avatar_url
		FROM posts
		JOIN users
		ON posts.user_id=users.id
		WHERE posts.id=$1;
		`,
		[postID]
	);

	const postContentsData = await pool.queryToDatabase(
		`
		SELECT
		content_type AS type,
		content
		FROM post_contents
		WHERE post_id=$1;
		`,
		[postID]
	);

	const taggedUsersData = await pool.queryToDatabase(
		`
		SELECT 
		users.id AS user_id,
		users.username AS username,
		users.full_name AS full_name,
		users.avatar_url as avatar_url
		FROM tagging
		JOIN users
		ON tagging.user_id = users.id
		WHERE post_id=$1;
		`,
		[postID]
	);

	const totalPostLikesData = await pool.queryToDatabase(
		`
		SELECT 
		COUNT(*)
		FROM likes
		WHERE post_id=$1;
		`,
		[postID]
	);

	const totalPostCommentsData = await pool.queryToDatabase(
		`
		SELECT 
		COUNT(*) 
		FROM comments 
		WHERE post_id=$1;
		`,
		[postID]
	);

	res.send({
		images: postImagesData.rows,
		categories: postCategoriesData.rows,
		user: postUserData.rows[0],
		contents: postContentsData.rows,
		taggedUsers: taggedUsersData.rows,
		totalLikes: parseInt(totalPostLikesData.rows[0].count),
		totalComments: parseInt(totalPostCommentsData.rows[0].count),
	});
});

// FIX: fetch posts that a user is following
postRouter.get("/posts/home", async (req, res) => {
	const { rows } = await pool.queryToDatabase(
		`
		SELECT
		id
		FROM posts
		ORDER BY created_at;
		`
	);

	const postIDsArray = rows.map((row) => row.id);

	const postsArray = [];

	for (let postID of postIDsArray) {
		const userData = await pool.queryToDatabase(
			`
			SELECT
			users.id AS user_id,
			posts.id AS post_id,
			posts.updated_at AS created_at,
			username,
			full_name,
			avatar_url
			FROM posts
			JOIN users
			ON posts.user_id = users.id
			WHERE posts.id=$1
			`,
			[postID]
		);

		const imageData = await pool.queryToDatabase(
			`
			SELECT
			image_url,
			image_width AS width,
			image_height AS height
			FROM posts
			JOIN post_images
			ON posts.id = post_images.post_id
			JOIN (
				SELECT
				COUNT(*) AS total_images,
				posts.id AS post_id
				FROM posts
				JOIN post_images
				ON posts.id = post_images.post_id
				GROUP BY posts.id
			) AS o
			ON posts.id = o.post_id
			WHERE posts.id=$1
			ORDER BY posts.created_at 
			`,
			[postID]
		);

		const postContentData = await pool.queryToDatabase(
			`
			SELECT
			content_type,
			content
			FROM posts
			JOIN post_contents
			ON posts.id = post_contents.post_id
			WHERE posts.id=$1
			`,
			[postID]
		);

		const totalPostLikesData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*)
			FROM likes
			WHERE post_id=$1;
			`,
			[postID]
		);

		const totalPostCommentsData = await pool.queryToDatabase(
			`
			SELECT 
			COUNT(*) 
			FROM comments 
			WHERE post_id=$1;
			`,
			[postID]
		);

		postsArray.push({
			...userData.rows[0],
			images: [...imageData.rows],
			content: postContentData.rows[0],
			totalLikes: parseInt(totalPostLikesData.rows[0].count),
			totalComments: parseInt(totalPostCommentsData.rows[0].count),
		});
	}

	res.send(postsArray);
});

module.exports = postRouter;
