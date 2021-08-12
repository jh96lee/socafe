const express = require("express");

const pool = require("../pool");

const authenticateToken = require("../middlewares/user/authenticateToken");

const notificationRouter = express.Router();

notificationRouter.post(
	"/notification/comment",
	authenticateToken,
	async (req, res) => {
		const userID = parseInt(res.locals.userID);

		const {
			mainCommentID,
			mainPostID,
			mainPostCommentParentCommentID,
			mainPostCommentRepliedCommentID,
			mainPostCommentNodesArray,
		} = req.body;

		try {
			if (!mainPostCommentParentCommentID) {
				const receiverData = await pool.queryToDatabase(
					`
                    SELECT
                    user_id
                    FROM posts
                    WHERE id=$1
                    `,
					[mainPostID]
				);

				const receiverID = parseInt(receiverData.rows[0].user_id);

				await pool.queryToDatabase(
					`
                    INSERT INTO comment_notifications
                    (instigator_id, receiver_id, post_id, instigated_comment_id, received_comment_id, mention_type)
                    VALUES
                    ($1, $2, $3, $4, $5, $6);
                    `,
					[userID, receiverID, mainPostID, mainCommentID, null, "post"]
				);
			}

			if (
				mainPostCommentParentCommentID &&
				mainPostCommentParentCommentID === mainPostCommentRepliedCommentID
			) {
				const receiverData = await pool.queryToDatabase(
					`
                    SELECT
                    user_id
                    FROM comments
                    WHERE id=$1
                    `,
					[mainPostCommentParentCommentID]
				);

				const receiverID = parseInt(receiverData.rows[0].user_id);

				await pool.queryToDatabase(
					`
                    INSERT INTO comment_notifications
                    (instigator_id, receiver_id, post_id, instigated_comment_id, received_comment_id, mention_type)
                    VALUES
                    ($1, $2, $3, $4, $5, $6);
                    `,
					[
						userID,
						receiverID,
						mainPostID,
						mainCommentID,
						mainPostCommentParentCommentID,
						"reply",
					]
				);
			} else if (
				mainPostCommentParentCommentID !== mainPostCommentRepliedCommentID
			) {
				const receivingCommentsArray = [
					{ id: mainPostCommentParentCommentID, type: "parent" },
					{ id: mainPostCommentRepliedCommentID, type: "replied" },
				];

				for (let comment of receivingCommentsArray) {
					const { id, type } = comment;

					const receiverData = await pool.queryToDatabase(
						`
                        SELECT
                        user_id
                        FROM comments
                        WHERE id=$1
                        `,
						[id]
					);

					const receiverID = parseInt(receiverData.rows[0].user_id);

					const mentionType = type === "parent" ? "comment" : "reply";

					await pool.queryToDatabase(
						`
                        INSERT INTO comment_notifications
                        (instigator_id, receiver_id, post_id, instigated_comment_id, received_comment_id, mention_type)
                        VALUES
                        ($1, $2, $3, $4, $5, $6);
                        `,
						[
							userID,
							receiverID,
							mainPostID,
							mainCommentID,
							commentID,
							mentionType,
						]
					);
				}
			}

			for (let node of mainPostCommentNodesArray) {
				const { node_value, mention_type } = node;

				if (mention_type === "tag") {
					if (node_value[0] === "@") {
						const receiverData = await pool.queryToDatabase(
							`
                            SELECT
                            id
                            FROM users
                            WHERE username=$1;
                            `,
							[node_value.substring(1)]
						);

						if (receiverData.rows[0]) {
							const receiverID = receiverData.rows[0].id;

							await pool.queryToDatabase(
								`
                                INSERT INTO comment_notifications
                                (instigator_id, receiver_id, post_id, instigated_comment_id, received_comment_id, mention_type)
                                VALUES
                                ($1, $2, $3, $4, $5, $6);
                                `,
								[userID, receiverID, mainPostID, mainCommentID, null, "tag"]
							);
						}
					}
				}
			}

			res.send({
				success: "Success",
			});
		} catch (error) {
			// TODO: remove later
			console.log(error);

			res.send({
				error: {
					catch: "There has been an error while registering user notification",
				},
			});
		}
	}
);

module.exports = notificationRouter;
