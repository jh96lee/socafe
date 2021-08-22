const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const getUserStory = async (req, res) => {
	const storyID = parseInt(req.params.storyID);
	const ownerID = parseInt(req.params.ownerID);
	const visitorID = parseInt(req.params.visitorID);

	try {
		const storyData = await pool.queryToDatabase(
			`
            SELECT 
            id, 
            created_at,
            user_id 
            FROM stories
            WHERE id=$1;
            `,
			[storyID]
		);

		if (!storyData.rows[0]) {
			res.send({ error: { story: "Story does not exist" } });
		} else if (parseInt(storyData.rows[0].user_id) !== ownerID) {
			res.send({ error: { story: "Story not found" } });
		} else {
			const ownerID = storyData.rows[0].user_id;

			const ownerData = await UserRepo.getUserByID(ownerID);

			const storyBackgroundData = await pool.queryToDatabase(
				`
                SELECT 
                story_backgrounds.id AS id,
                background_gradient
                FROM backgrounds_stories
                JOIN story_backgrounds
                ON backgrounds_stories.story_background_id=story_backgrounds.id
                WHERE story_id=$1;
                `,
				[storyID]
			);

			const storyImageData = await pool.queryToDatabase(
				`
                SELECT
                image_public_id,
                image_url,
                image_width,
                image_height,
                story_image_top,
                story_image_left,
				story_is_image_transformed
                FROM story_images
                WHERE story_id=$1;
                `,
				[storyID]
			);

			const storyTextData = await pool.queryToDatabase(
				`
                SELECT
                node_type,
                node_value,
                story_text_top,
                story_text_left,
                story_text_is_bold,
                story_text_is_italic,
                story_text_is_underline,
                story_text_size,
                story_text_color,
				story_is_text_transformed
                FROM story_texts
                WHERE story_id=$1;
                `,
				[storyID]
			);

			res.send({
				...storyData.rows[0],
				story_owner: ownerData,
				story_background: storyBackgroundData.rows[0],
				story_image: storyImageData.rows[0],
				story_text: storyTextData.rows[0],
			});
		}
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching your story",
			},
		});
	}
};

module.exports = getUserStory;
