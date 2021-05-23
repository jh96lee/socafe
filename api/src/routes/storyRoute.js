const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");
const pool = require("../pool");

const storyRouter = express.Router();

storyRouter.post("/upload/story", authenticateToken, async (req, res) => {
	const user_id = req.body.decoded.id;

	const {
		story_url,
		story_views,
		brightness,
		blur,
		contrast,
		grayscale,
		invert,
		opacity,
		saturate,
		sepia,
		hue_rotate,
	} = req.body;

	try {
		const { rows } = await pool.queryToDatabase(
			`
            INSERT INTO stories
            (story_url, story_views, brightness, blur, contrast, grayscale, 
            invert, opacity, saturate, sepia, hue_rotate, user_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            RETURNING id, story_url, story_views, brightness, blur, contrast, 
            grayscale, invert, opacity, saturate, sepia, hue_rotate, user_id;
            `,
			[
				story_url,
				story_views,
				brightness,
				blur,
				contrast,
				grayscale,
				invert,
				opacity,
				saturate,
				sepia,
				hue_rotate,
				user_id,
			]
		);

		res.send(rows[0]);
	} catch (error) {
		res.send({
			message: "An error has occurred",
		});
	}
});

storyRouter.delete(
	"/story/delete/:storyId",
	authenticateToken,
	async (req, res) => {
		const user_id = req.body.decoded.id;
		const story_id = req.params.storyId;

		const { rows } = await pool.queryToDatabase(
			`
            SELECT user_id
            FROM stories
            WHERE id=$1 
            `,
			[story_id]
		);

		const userIdOfStoryToDelete = rows[0].user_id;

		if (userIdOfStoryToDelete !== user_id) {
			res.send({
				message: "Unauthorized Request",
			});
		} else {
			await pool.queryToDatabase(
				`
                DELETE FROM stories
                WHERE id=$1 AND user_id=$2
                `,
				[story_id, user_id]
			);

			res.end();
		}
	}
);

module.exports = storyRouter;
