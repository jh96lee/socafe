const pool = require("../pool");

class StoryRepo {
	static async getStoryBasicsByID(storyID) {
		const { rows } = await pool.queryToDatabase(
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

		return rows[0];
	}

	static async getStoryBackgroundByID(storyID) {
		const { rows } = await pool.queryToDatabase(
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

		return rows[0];
	}

	static async getStoryImageByID(storyID) {
		const { rows } = await pool.queryToDatabase(
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

		return rows[0];
	}

	static async getStoryTextByID(storyID) {
		const { rows } = await pool.queryToDatabase(
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

		return rows[0];
	}
}

module.exports = StoryRepo;
