const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const postCommentNotifications = async (req, res) => {
	const instigatorID = parseInt(res.locals.userID);

	const {
		mainCommentID,
		mainPostID,
		mainPostCommentParentCommentID,
		mainPostCommentRepliedCommentID,
		mainPostCommentNodesArray,
	} = req.body;

	try {
		// REVIEW: if the comment is a parent comment, mainPostCommentParentCommentID is null
		// REVIEW: therefore, we want to notify the post user that someone left a parent comment on his/her post
		if (!mainPostCommentParentCommentID) {
			const receiverData = await pool.queryToDatabase(
				`
                SELECT
                user_id
                FROM posts
                WHERE id=$1;
                `,
				[mainPostID]
			);

			const receiverID = parseInt(receiverData.rows[0].user_id);

			await pool.queryToDatabase(
				`
				INSERT INTO notifications 
				(instigator_id, receiver_id, post_id, instigated_comment_id, received_comment_id, notification_type)
				VALUES
				($1, $2, $3, $4, $5, $6);
                `,
				[instigatorID, receiverID, mainPostID, mainCommentID, null, "POST"]
			);
		}

		// REVIEW: if the comment is a reply, but a reply to the parent comment, then we only want to leave a notification
		// REVIEW: that someone replied to your comment instead of both someone left a comment under your comment and someone replied to your comment
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
				INSERT INTO notifications 
				(instigator_id, receiver_id, post_id, instigated_comment_id, received_comment_id, notification_type)
				VALUES
				($1, $2, $3, $4, $5, $6);
                `,
				[
					instigatorID,
					receiverID,
					mainPostID,
					mainCommentID,
					mainPostCommentParentCommentID,
					"REPLY",
				]
			);
		} else if (
			// REVIEW: if those 2 values, differ, 2 separate notifications need to be posted
			mainPostCommentParentCommentID !== mainPostCommentRepliedCommentID
		) {
			const receivingCommentsArray = [
				{
					commentID: mainPostCommentParentCommentID,
					notificationType: "COMMENT",
				},
				{
					commentID: mainPostCommentRepliedCommentID,
					notificationType: "REPLY",
				},
			];

			for (let receivingComment of receivingCommentsArray) {
				const { commentID, notificationType } = receivingComment;

				const receiverData = await pool.queryToDatabase(
					`
					SELECT
					user_id
					FROM comments
					WHERE id=$1
					`,
					[commentID]
				);

				const receiverID = parseInt(receiverData.rows[0].user_id);

				await pool.queryToDatabase(
					`
					INSERT INTO notifications 
					(instigator_id, receiver_id, post_id, instigated_comment_id, received_comment_id, notification_type)
					VALUES
					($1, $2, $3, $4, $5, $6);
					`,
					[
						instigatorID,
						receiverID,
						mainPostID,
						mainCommentID,
						commentID,
						notificationType,
					]
				);
			}
		}

		for (let node of mainPostCommentNodesArray) {
			const { node_value, mention_type } = node;

			if (mention_type === "TAG") {
				if (node_value[0] === "@") {
					const taggedUserUsername = node_value.substring(1);

					const receiverData = await pool.queryToDatabase(
						`
                        SELECT
                        id
                        FROM users
                        WHERE username=$1;
                        `,
						[taggedUserUsername]
					);

					const taggedUser = receiverData.rows[0];

					if (taggedUser) {
						const receiverID = parseInt(receiverData.rows[0].id);

						await pool.queryToDatabase(
							`
							INSERT INTO notifications 
							(instigator_id, receiver_id, post_id, instigated_comment_id, received_comment_id, notification_type)
							VALUES
							($1, $2, $3, $4, $5, $6);
                            `,
							[instigatorID, receiverID, mainPostID, mainCommentID, null, "TAG"]
						);
					}
				}
			}
		}

		res.send({
			success: "Success",
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while registering user notification",
			},
		});
	}
};

module.exports = postCommentNotifications;
