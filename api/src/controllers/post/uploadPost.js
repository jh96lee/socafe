const pool = require("../../pool");

const uploadPost = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const {
		postImagesArray,
		postTopicsArray,
		postTaggedUsersArray,
		postNodesArray,
	} = req.body;

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

		for (let image of postImagesArray) {
			const { url, width, height } = image;

			await pool.queryToDatabase(
				`
				INSERT INTO post_images(image_url, image_width, image_height, post_id)
				VALUES ($1, $2, $3, $4);
				`,
				[url, width, height, postID]
			);
		}

		for (let topic of postTopicsArray) {
			const { id } = topic;

			await pool.queryToDatabase(
				`
				INSERT INTO topics_posts(topic_id, post_id)
				VALUES ($1, $2);
				 `,
				[id, postID]
			);
		}

		for (let user of postTaggedUsersArray) {
			const { id } = user;

			await pool.queryToDatabase(
				`
				INSERT INTO tagging(post_id, comment_id, user_id)
				VALUES ($1, $2, $3);
				`,
				[postID, null, id]
			);
		}

		for (let node of postNodesArray) {
			const { type, content } = node;

			await pool.queryToDatabase(
				`
				INSERT INTO post_captions(node_type, node_value, post_id)
				VALUES ($1, $2, $3);
				`,
				[type, content, postID]
			);
		}

		res.send({ postID, success: "Success" });
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while uploading your post",
			},
		});
	}
};

module.exports = uploadPost;
