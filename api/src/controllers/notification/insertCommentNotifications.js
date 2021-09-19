const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const insertCommentNotifications = async (req, res) => {
	const instigatorID = parseInt(res.locals.userID);

	const {
		commentID,
		postID,
		parentCommentID,
		repliedCommentID,
		commentNodesArray,
	} = req.body;

	try {
		// REVIEW: if the comment is a parent comment, parentCommentID is null
		// REVIEW: therefore, we want to notify the post user that someone left a parent comment on his/her post
		if (!parentCommentID) {
			const receiverIDData = await pool.queryToDatabase(
				`
                SELECT
                user_id AS id
                FROM posts
                WHERE id=$1;
                `,
				[postID]
			);

			const receiverID = parseInt(receiverIDData.rows[0].id);

			await pool.queryToDatabase(
				`
				INSERT INTO notifications
				(
					instigator_id, receiver_id, post_id, 
					following_id, post_like_id, comment_like_id, 
					instigated_comment_id, received_comment_id, notification_type
				)
				VALUES 
				($1, $2, $3, $4, $5, $6, $7, $8, $9);
                `,
				[
					instigatorID,
					receiverID,
					postID,
					null,
					null,
					null,
					commentID,
					null,
					"COMMENT_POST",
				]
			);
		}

		// REVIEW: if the comment is a reply, but a reply to the parent comment, then we only want to leave a notification
		// REVIEW: that someone replied to your comment instead of both someone left a comment under your comment and someone replied to your comment
		if (parentCommentID && parentCommentID === repliedCommentID) {
			const receiverIDData = await pool.queryToDatabase(
				`
                SELECT
                user_id AS id
                FROM comments
                WHERE id=$1
                `,
				[parentCommentID]
			);

			const receiverID = parseInt(receiverIDData.rows[0].id);

			await pool.queryToDatabase(
				`
				INSERT INTO notifications
				(
					instigator_id, receiver_id, post_id, 
					following_id, post_like_id, comment_like_id, 
					instigated_comment_id, received_comment_id, notification_type
				)
				VALUES 
				($1, $2, $3, $4, $5, $6, $7, $8, $9);
                `,
				[
					instigatorID,
					receiverID,
					postID,
					null,
					null,
					null,
					commentID,
					parentCommentID,
					"REPLY",
				]
			);
		} else if (
			parentCommentID &&
			// REVIEW: if those 2 values, differ, 2 separate notifications need to be posted
			parentCommentID !== repliedCommentID
		) {
			const receivingCommentsArray = [
				{
					receivingCommentID: parentCommentID,
					notificationType: "COMMENT_COMMENT",
				},
				{
					receivingCommentID: repliedCommentID,
					notificationType: "REPLY",
				},
			];

			for (let receivingComment of receivingCommentsArray) {
				const { receivingCommentID, notificationType } = receivingComment;

				const receiverIDData = await pool.queryToDatabase(
					`
					SELECT
					user_id AS id
					FROM comments
					WHERE id=$1
					`,
					[commentID]
				);

				const receiverID = parseInt(receiverIDData.rows[0].id);

				await pool.queryToDatabase(
					`
					INSERT INTO notifications
					(
						instigator_id, receiver_id, post_id, 
						following_id, post_like_id, comment_like_id, 
						instigated_comment_id, received_comment_id, notification_type
					)
					VALUES 
					($1, $2, $3, $4, $5, $6, $7, $8, $9);
					`,
					[
						instigatorID,
						receiverID,
						postID,
						null,
						null,
						null,
						commentID,
						receivingCommentID,
						notificationType,
					]
				);
			}
		}

		for (let node of commentNodesArray) {
			const { node_value, mention_type } = node;

			if (mention_type === "TAG") {
				if (node_value[0] === "@") {
					const username = node_value.substring(1);

					const taggedUserData = await pool.queryToDatabase(
						`
                        SELECT
                        id
                        FROM users
                        WHERE username=$1;
                        `,
						[username]
					);

					if (taggedUserData.rows[0]) {
						const receiverID = parseInt(taggedUserData.rows[0].id);

						await pool.queryToDatabase(
							`
							INSERT INTO notifications
							(
								instigator_id, receiver_id, post_id, 
								following_id, post_like_id, comment_like_id, 
								instigated_comment_id, received_comment_id, notification_type
							)
							VALUES 
							($1, $2, $3, $4, $5, $6, $7, $8, $9);
                            `,
							[
								instigatorID,
								receiverID,
								postID,
								null,
								null,
								null,
								commentID,
								null,
								"COMMENT_TAG",
							]
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

module.exports = insertCommentNotifications;
