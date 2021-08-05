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

		const postID = parseInt(rows[0].id);

		for (let image of postImagesArray) {
			const { id, url, width, height } = image;

			await pool.queryToDatabase(
				`
				INSERT INTO post_images(image_public_id, image_url, image_width, image_height, post_id)
				VALUES ($1, $2, $3, $4, $5);
				`,
				[id, url, width, height, postID]
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

		for (let taggedUser of postTaggedUsersArray) {
			const { id } = taggedUser;

			await pool.queryToDatabase(
				`
				INSERT INTO users_posts(post_id, user_id)
				VALUES ($1, $2);
				`,
				[postID, id]
			);
		}

		for (let node of postNodesArray) {
			const { nodeType, nodeValue } = node;

			await pool.queryToDatabase(
				`
				INSERT INTO post_captions(node_type, node_value, post_id)
				VALUES ($1, $2, $3);
				`,
				[nodeType, nodeValue, postID]
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
