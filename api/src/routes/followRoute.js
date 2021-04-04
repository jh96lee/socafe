const express = require("express");

const { authenticateToken } = require("../middlewares/userMiddleware");
const pool = require("../pool");

const followRouter = express.Router();

followRouter.post(
	"/follow/:leader_user_id",
	authenticateToken,
	async (req, res) => {
		const follower_user_id = req.body.decoded.id;
		const leader_user_id = req.params.leader_user_id;

		try {
			await pool.queryToDatabase(
				`
            INSERT INTO followers(leader_id, follower_id)
            VALUES($1, $2);
            `,
				[leader_user_id, follower_user_id]
			);

			res.end();
		} catch (error) {
			res.send({
				message: "Too Many Requests",
			});
		}
	}
);

followRouter.get("/follow/following/:follower_user_id", async (req, res) => {
	const follower_user_id = req.params.follower_user_id;

	const { rows } = await pool.queryToDatabase(
		`
        SELECT 
        users.id AS user_id,
        users.avatar_url AS avatar_url,
        users.username AS username,
        users.first_name AS first_name,
        users.last_name AS last_name
        FROM followers
        JOIN users
        ON users.id=followers.leader_id
        WHERE follower_id=$1;
        `,
		[follower_user_id]
	);

	res.send(rows);
});

followRouter.get("/follow/leading/:leader_user_id", async (req, res) => {
	const leader_user_id = req.params.leader_user_id;

	const { rows } = await pool.queryToDatabase(
		`
        SELECT 
        users.id AS user_id,
        users.avatar_url AS avatar_url,
        users.username AS username,
        users.first_name AS first_name,
        users.last_name AS last_name
        FROM followers
        JOIN users
        ON users.id=followers.follower_id
        WHERE leader_id=$1;
        `,
		[leader_user_id]
	);

	res.send(rows);
});

module.exports = followRouter;
