const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");
const pool = require("../pool");

const reactionRouter = express.Router();

reactionRouter.post(
	"/insert/reaction/:storyId",
	authenticateToken,
	async (req, res) => {
		const user_id = req.body.decoded.id;
		const story_id = req.params.storyId;
		const reaction_id = req.body.reactionId;

		await pool.queryToDatabase(
			`
            INSERT INTO reactions_stories(user_id, story_id, reaction_id)
            VALUES($1, $2, $3);
            `,
			[user_id, story_id, reaction_id]
		);

		res.end();
	}
);

reactionRouter.put(
	"/update/reaction/:storyId",
	authenticateToken,
	async (req, res) => {
		const user_id = req.body.decoded.id;
		const story_id = req.params.storyId;
		const reaction_id = req.body.reactionId;

		await pool.queryToDatabase(
			`
            UPDATE reactions_stories
            SET reaction_id=$1
            WHERE story_id=$2 AND user_id=$3
            `,
			[reaction_id, story_id, user_id]
		);

		res.end();
	}
);

reactionRouter.delete(
	"/delete/reaction/:storyId",
	authenticateToken,
	async (req, res) => {
		const user_id = req.body.decoded.id;
		const story_id = req.params.storyId;

		await pool.queryToDatabase(
			`
            DELETE FROM reactions_stories
            WHERE story_id=$1 AND user_id=$2;
            `,
			[story_id, user_id]
		);

		res.end();
	}
);

module.exports = reactionRouter;
