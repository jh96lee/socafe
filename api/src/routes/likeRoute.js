const express = require("express");

const { authenticateToken } = require("../middlewares/userMiddleware");
const pool = require("../pool");

const likeRouter = express.Router();

likeRouter.post(
	"/like/:content/:contentId",
	authenticateToken,
	async (req, res) => {
		// TODO: this could either be a post or a comment
		const contentType = req.params.content;
		const contentId = req.params.contentId;
		const user_id = req.body.decoded.id;

		const post_id = contentType === "post" ? contentId : null;
		const comment_id = contentType === "comment" ? contentId : null;

		try {
			await pool.queryToDatabase(
				`
                INSERT INTO likes(user_id, post_id, comment_id)
                VALUES ($1, $2, $3)
                RETURNING *;
                `,
				[user_id, post_id, comment_id]
			);

			res.end();
		} catch (error) {
			res.send({
				message: "Too Many Requests",
			});
		}
	}
);

likeRouter.delete(
	"/like/:content/:contentId",
	authenticateToken,
	async (req, res) => {
		const contentType = req.params.content;
		const contentId = req.params.contentId;
		const user_id = req.body.decoded.id;

		const post_id = contentType === "post" ? contentId : null;
		const comment_id = contentType === "comment" ? contentId : null;

		try {
			await pool.queryToDatabase(
				`
                DELETE FROM likes
                WHERE user_id=$1 AND (post_id=$2 OR comment_id=$3)
                `,
				[user_id, post_id, comment_id]
			);

			res.end();
		} catch (error) {
			res.send({
				message: "Too Many Requests",
			});
		}
	}
);

likeRouter.get("/like/:content/:contentId", async (req, res) => {
	const contentId = req.params.contentId;
	const contentType = req.params.content === "post" ? "post_id" : "comment_id";

	const { rows } = await pool.queryToDatabase(
		`
        SELECT
        users.id AS user_id,
        users.avatar_url AS avatar_url,
        users.username AS username,
        users.first_name AS first_name,
        users.last_name AS last_name
        FROM likes
        JOIN users
        ON likes.user_id=users.id
        WHERE likes.${contentType}=$1;
        `,
		[contentId]
	);

	res.send(rows);
});

module.exports = likeRouter;
