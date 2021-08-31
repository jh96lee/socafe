const pool = require("../../pool");

const uploadStory = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { storyBackground, storyImage, storyText } = req.body;

	const { uploadedStoryImage, imageTop, imageLeft, isImageTransformed } =
		storyImage;

	const {
		storyTextContent,
		isBold,
		isItalic,
		isUnderline,
		selectedTextSizeRatio,
		selectedTextColor,
		textTop,
		textLeft,
		isTextTransformed,
	} = storyText;

	try {
		const storyData = await pool.queryToDatabase(
			`
            INSERT INTO stories (user_id)
            VALUES ($1)
            RETURNING id;
            `,
			[userID]
		);

		const storyID = storyData.rows[0].id;

		// REVIEW: this could either be an empty object or an object with id and background_gradient properties
		if (storyBackground.id) {
			await pool.queryToDatabase(
				`
                INSERT INTO backgrounds_stories 
                (story_id, story_background_id)
                VALUES ($1, $2);
                `,
				[storyID, parseInt(storyBackground.id)]
			);
		}

		if (uploadedStoryImage) {
			await pool.queryToDatabase(
				`
                INSERT INTO story_images
                (image_public_id, image_url, image_width, image_height, story_id, story_image_top, story_image_left, story_is_image_transformed)
                VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8);
                `,
				[
					uploadedStoryImage.id,
					uploadedStoryImage.image_url,
					uploadedStoryImage.image_width,
					uploadedStoryImage.image_height,
					storyID,
					imageTop,
					imageLeft,
					isImageTransformed ? 1 : 0,
				]
			);
		}

		if (storyTextContent) {
			await pool.queryToDatabase(
				`
                INSERT INTO story_texts
                (story_id, node_type, node_value, story_text_top, story_text_left, story_text_is_bold, story_text_is_italic, story_text_is_underline, story_text_size_ratio, story_text_color, story_is_text_transformed)
                VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
                `,
				[
					storyID,
					"P",
					storyTextContent,
					textTop,
					textLeft,
					isBold ? 1 : 0,
					isItalic ? 1 : 0,
					isUnderline ? 1 : 0,
					selectedTextSizeRatio,
					selectedTextColor,
					isTextTransformed ? 1 : 0,
				]
			);
		}

		res.send({
			storyID,
			success: "Success",
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while uploading your story",
			},
		});
	}
};

module.exports = uploadStory;
