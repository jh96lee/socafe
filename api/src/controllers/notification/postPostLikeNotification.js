const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const postPostLikeNotification = async (req, res) => {
	const instigatorID = parseInt(res.locals.userID);
	const postID = parseInt(req.params.postID);
	const notificationType = "LIKE";

	try {
		const receiverData = await pool.queryToDatabase(
			`
            SELECT
            user_id
            FROM posts
            WHERE id=$1;
            `,
			[postID]
		);

		const receiverID = parseInt(receiverData.rows[0].user_id);

		await pool.queryToDatabase(
			`
            INSERT INTO notifications 
            (instigator_id, receiver_id, post_id, instigated_comment_id, received_comment_id, notification_type, is_notification_checked)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7);
            `,
			[instigatorID, receiverID, postID, null, null, notificationType, 0]
		);

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

module.exports = postPostLikeNotification;
