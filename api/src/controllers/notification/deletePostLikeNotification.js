const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const deletePostLikeNotification = async (req, res) => {
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
            DELETE FROM notifications
            WHERE 
            instigator_id=$1 
            AND 
            receiver_id=$2
            AND
            post_id=$3
            AND
            notification_type=$4
            `,
			[instigatorID, receiverID, postID, notificationType]
		);

		res.send({
			success: "Success",
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while deleting user notification",
			},
		});
	}
};

module.exports = deletePostLikeNotification;
