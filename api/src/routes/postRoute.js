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

module.exports = postRouter;
