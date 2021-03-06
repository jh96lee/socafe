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
			INSERT INTO posts(user_id)
			VALUES ($1)
			RETURNING posts.id;
			`,
			[userID]
		);

		const postID = parseInt(rows[0].id);

		for (let image of postImagesArray) {
			const { id, image_url, image_width, image_height } = image;

			await pool.queryToDatabase(
				`
				INSERT INTO post_images(image_public_id, image_url, image_width, image_height, post_id)
				VALUES ($1, $2, $3, $4, $5);
				`,
				[id, image_url, image_width, image_height, postID]
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

			await pool.queryToDatabase(
				`
				INSERT INTO notifications
				(
					instigator_id, receiver_id, post_id, 
					following_id, post_like_id, comment_like_id, 
					instigated_comment_id, received_comment_id, notification_type
				)
				VALUES 
				($1, $2, $3, $4, $5, $6, $7, $8, $9);
				`,
				[userID, id, postID, null, null, null, null, null, "POST_TAG"]
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
