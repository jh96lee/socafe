const pool = require("../../pool");

const destroyImage = require("../../utils/image/destroyImage");

const deletePost = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const postID = parseInt(req.params.postID);

	try {
		const postData = await pool.queryToDatabase(
			`
            SELECT
            user_id
            FROM posts
            WHERE id=$1
            `,
			[postID]
		);

		const { user_id } = postData.rows[0];

		if (!postData.rows[0]) {
			res.send({
				error: { post: "Couldn't find the post to delete" },
			});

			return;
		} else if (parseInt(user_id) !== userID) {
			res.send({
				error: { post: "You don't have the permission to delete this post" },
			});

			return;
		} else {
			const postImagesData = await pool.queryToDatabase(
				`
                SELECT
                id,
                image_public_id, 
                image_url, 
                image_width, 
                image_height, 
                post_id
                FROM post_images
                WHERE post_id=$1;
                `,
				[postID]
			);

			for (let postImageData of postImagesData.rows) {
				const { image_public_id } = postImageData;

				await destroyImage(image_public_id);
			}

			await pool.queryToDatabase(
				`
                DELETE
                FROM posts
                WHERE id=$1
                `,
				[postID]
			);

			res.send({
				// REVIEW: send deleted postID
				id: postID,
				success: "Success",
			});
		}
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while deleting your post",
			},
		});
	}
};

module.exports = deletePost;
