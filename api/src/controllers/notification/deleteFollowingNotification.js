const pool = require("../../pool");

const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const deleteFollowingNotification = async (req, res) => {
	const instigatorID = parseInt(res.locals.userID);
	const receiverID = parseInt(req.params.leaderID);
	const notificationType = "FOLLOW";

	try {
		await pool.queryToDatabase(
			`
            DELETE FROM notifications
            WHERE 
            instigator_id=$1 
            AND 
            receiver_id=$2
            AND
            notification_type=$3
            `,
			[instigatorID, receiverID, notificationType]
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

module.exports = deleteFollowingNotification;
