const pool = require("../../pool");

const uploadPostComment = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const {
		mainPostID,
		mainPostCommentParentCommentID,
		mainPostCommentRepliedCommentID,
		mainPostCommentNodesArray,
	} = req.body;

	try {
		// REVIEW: insert data into comments table
		const { rows } = await pool.queryToDatabase(
			`
            INSERT INTO comments
            (user_id, post_id, parent_comment_id)
            VALUES ($1, $2, $3)
            RETURNING id, created_at;
            `,
			[userID, mainPostID, mainPostCommentParentCommentID]
		);

		// REVIEW: retrieve the id of the comment that has just been inserted
		const mainPostCommentID = rows[0].id;
		const mainPostCreatedAt = rows[0].created_at;

		// REVIEW: this means it's the comment posted is a reply
		if (mainPostCommentRepliedCommentID && mainPostCommentParentCommentID) {
			const { rows } = await pool.queryToDatabase(
				`
                SELECT
                user_id
                FROM comments
                WHERE id=$1
                `,
				[mainPostCommentRepliedCommentID]
			);

			const repliedCommentOwnerID =
				rows.length > 0 ? parseInt(rows[0].user_id) : null;

			if (repliedCommentOwnerID) {
				await pool.queryToDatabase(
					`
					INSERT INTO comment_notifications
					(instigator_id, receiver_id, post_id, post_comment_id, replied_comment_id, reply_comment_id, tagged_comment_id, liked_comment_id, mention_type)
					VALUES
					($1, $2, $3, $4, $5, $6, $7, $8, $9);
                    `,
					[
						userID,
						repliedCommentOwnerID,
						mainPostID,
						null,
						mainPostCommentRepliedCommentID,
						// REVIEW: reply comment id is the comment that has just been posted
						mainPostCommentID,
						null,
						null,
						"reply",
					]
				);
			}
		} else if (
			// REVIEW: this means it's parent comment, therefore the post owner needs to be notified
			!mainPostCommentRepliedCommentID &&
			!mainPostCommentParentCommentID
		) {
			const { rows } = await pool.queryToDatabase(
				`
                SELECT
                user_id
                FROM posts
                WHERE id=$1
                `,
				[mainPostID]
			);

			// REVIEW: the owner of the post receives the notification
			const postOwnerID = rows.length > 0 ? parseInt(rows[0].user_id) : null;

			await pool.queryToDatabase(
				`
				INSERT INTO comment_notifications
				(instigator_id, receiver_id, post_id, post_comment_id, replied_comment_id, reply_comment_id, tagged_comment_id, liked_comment_id, mention_type)
				VALUES
				($1, $2, $3, $4, $5, $6, $7, $8, $9);
                `,
				[
					userID,
					postOwnerID,
					mainPostID,
					mainPostCommentID,
					// REVIEW: since this is simply leaving a comment on a post instead of replying to someone, both replied and reply comment id are null
					null,
					null,
					null,
					null,
					"comment",
				]
			);
		}

		for (let node of mainPostCommentNodesArray) {
			const { nodeType, nodeValue, mentionType } = node;

			// REVIEW: insert the nodes values into comment_contents table
			await pool.queryToDatabase(
				`
                INSERT INTO comment_contents
                (comment_id, node_type, node_value)
                VALUES ($1, $2, $3);
                `,
				[mainPostCommentID, nodeType, nodeValue]
			);

			// TODO: dealt with replying above
			if (nodeType === "P" && mentionType !== "reply") {
				const taggedUsername = nodeValue.substring(1).trim();

				const { rows } = await pool.queryToDatabase(
					`
                    SELECT
                    id
                    FROM users
                    WHERE username=$1;
                    `,
					[taggedUsername]
				);

				const taggedUserID = rows.length > 0 ? parseInt(rows[0].id) : null;

				if (taggedUserID) {
					await pool.queryToDatabase(
						`
						INSERT INTO comment_notifications
						(instigator_id, receiver_id, post_id, post_comment_id, replied_comment_id, reply_comment_id, tagged_comment_id, liked_comment_id, mention_type)
						VALUES
						($1, $2, $3, $4, $5, $6, $7, $8, $9);
                        `,
						[
							userID,
							taggedUserID,
							mainPostID,
							null,
							null,
							null,
							// REVIEW: reply comment id is the comment that has just been posted
							mainPostCommentID,
							null,
							"tag",
						]
					);
				}
			}
		}

		// REVIEW: data of comment's owner
		const mainPostCommentUserData = await pool.queryToDatabase(
			`
            SELECT 
            id AS user_id,  
            username,
            avatar_url
            FROM users
            WHERE id=$1;
            `,
			[userID]
		);

		const mainPostCommentNodesArrayData = await pool.queryToDatabase(
			`
            SELECT
            node_type, 
            node_value
            FROM comment_contents
            WHERE comment_id=$1;
            `,
			[mainPostCommentID]
		);

		res.send({
			comment_id: mainPostCommentID,
			created_at: mainPostCreatedAt,
			...mainPostCommentUserData.rows[0],
			post_id: mainPostID,
			parent_comment_id: mainPostCommentParentCommentID,
			comment_nodes_array: mainPostCommentNodesArrayData.rows,
			comment_total_likes: 0,
			comment_total_replies: 0,
			comment_is_liked: false,
			success: "Success",
		});
	} catch (error) {
		console.log(error);

		res.send({
			error: { catch: "There has been an error while posting your comment" },
		});
	}
};

module.exports = uploadPostComment;
