const express = require("express");

const pool = require("../pool");

const authenticateToken = require("../middlewares/user/authenticateToken");
const followUser = require("../controllers/follow/followUser");
const unfollowUser = require("../controllers/follow/unfollowUser");

const followRouter = express.Router();

followRouter.post("/follow/:leaderID", authenticateToken, async (req, res) => {
	const followerID = parseInt(res.locals.userID);
	const leaderID = parseInt(req.params.leaderID);

	try {
		await pool.queryToDatabase(
			`
            INSERT INTO following
            (leader_id, follower_id)
            VALUES
            ($1, $2);
            `,
			[leaderID, followerID]
		);

		res.send({ success: "Success" });
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while processing your following",
			},
		});
	}
});

followRouter.delete(
	"/unfollow/:leaderID",
	authenticateToken,
	async (req, res) => {
		const followerID = parseInt(res.locals.userID);
		const leaderID = parseInt(req.params.leaderID);

		try {
			await pool.queryToDatabase(
				`
            DELETE 
            FROM following
            WHERE leader_id=$1 AND follower_id=$2;
            `,
				[leaderID, followerID]
			);

			res.send({ success: "Success" });
		} catch (error) {
			res.send({
				error: {
					catch: "There has been an error while processing your following",
				},
			});
		}
	}
);

module.exports = followRouter;
