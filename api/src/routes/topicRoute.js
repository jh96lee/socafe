const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");
const pool = require("../pool");

const topicRouter = express.Router();

// REVIEW: this is for general topics fetching
topicRouter.get("/topic", async (req, res) => {
	try {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT id, title, topic_url
            FROM post_topics;
            `
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching post topics",
			},
		});
	}
});

topicRouter.get(
	"/topic/following/following-topics",
	authenticateToken,
	async (req, res) => {
		const userID = parseInt(res.locals.userID);

		try {
			const { rows } = await pool.queryToDatabase(
				`
				SELECT
				post_topics.id AS id,
				title,
				topic_url
				FROM post_topics
				JOIN topics_users
				ON post_topics.id=topics_users.topic_id
				WHERE user_id=$1
				`,
				[userID]
			);

			res.send(rows);
		} catch (error) {
			res.send({
				error: {
					catch: "There has been an error while retrieving post topics",
				},
			});
		}
	}
);

topicRouter.get(
	"/topic/following/all-topics",
	authenticateToken,
	async (req, res) => {
		const userID = parseInt(res.locals.userID);

		try {
			const { rows } = await pool.queryToDatabase(
				`
			SELECT
				id,
				title,
				topic_url,
				CASE 
					WHEN id IN 
					(
						SELECT
						topic_id AS id
						FROM post_topics
						JOIN topics_users
						ON post_topics.id=topics_users.topic_id
						WHERE user_id=$1
					) 
					THEN 1
					ELSE 0
				END AS is_following_topic
			FROM post_topics;
			`,
				[userID]
			);

			res.send(rows);
		} catch (error) {
			res.send({
				error: {
					catch: "There has been an error while retrieving post topics",
				},
			});
		}
	}
);

topicRouter.post("/topic/follow", authenticateToken, async (req, res) => {
	const { topicsToFollowArray } = req.body;

	const { userID } = res.locals;

	if (topicsToFollowArray.length === 0) {
		res.send({ success: "Success" });
	} else {
		const topicIDsArray = topicsToFollowArray.map((topic) => {
			return topic.id;
		});

		try {
			for (topicID of topicIDsArray) {
				await pool.queryToDatabase(
					`
						INSERT INTO topics_users(user_id, topic_id)
						VALUES ($1, $2);
						`,
					[userID, topicID]
				);
			}

			res.send({ success: "Success" });
		} catch (error) {
			res.send({
				error: {
					catch: "There has been an error while working with topics to follow",
				},
			});
		}
	}
});

topicRouter.post("/search/topic", async (req, res) => {
	const { searchInput } = req.body;

	const likeSearchInput = `%${searchInput}%`;

	try {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			* FROM
			post_topics
			WHERE
			LOWER(title) LIKE $1
			`,
			[likeSearchInput]
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while searching for post topics",
			},
		});
	}
});

module.exports = topicRouter;
