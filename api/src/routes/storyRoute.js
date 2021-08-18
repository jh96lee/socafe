const express = require("express");

const pool = require("../pool");

const UserRepo = require("../repos/user-repo");

const authenticateToken = require("../middlewares/user/authenticateToken");

const storyRouter = express.Router();

storyRouter.get("/story/backgrounds", async (req, res) => {
	try {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id,
            background_gradient
            FROM story_backgrounds;
            `
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for story backgrounds",
			},
		});
	}
});

storyRouter.post("/upload/story", authenticateToken, async (req, res) => {
	const userID = parseInt(res.locals.userID);

	console.log(req.body);

	const { storyBackground, storyImage, storyText } = req.body;

	const { uploadedStoryImage, imageTop, imageLeft } = storyImage;

	const {
		storyTextContent,
		isBold,
		isItalic,
		isUnderline,
		selectedTextSize,
		selectedTextColor,
		textTop,
		textLeft,
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
                (image_public_id, image_url, image_width, image_height, story_id, story_image_top, story_image_left)
                VALUES 
                ($1, $2, $3, $4, $5, $6, $7);
                `,
				[
					uploadedStoryImage.id,
					uploadedStoryImage.image_url,
					uploadedStoryImage.image_width,
					uploadedStoryImage.image_height,
					storyID,
					imageTop,
					imageLeft,
				]
			);
		}

		if (storyTextContent) {
			await pool.queryToDatabase(
				`
                INSERT INTO story_texts
                (story_id, node_type, node_value, story_text_top, story_text_left, story_text_is_bold, story_text_is_italic, story_text_is_underline, story_text_size, story_text_color)
                VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
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
					selectedTextSize,
					selectedTextColor,
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
});

storyRouter.get("/story/:storyID/:visitorID", async (req, res) => {
	const storyID = parseInt(req.params.storyID);
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
                story_image_left
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
                story_text_color
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
	} catch (error) {}
});

module.exports = storyRouter;