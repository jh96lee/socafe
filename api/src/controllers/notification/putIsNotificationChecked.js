const pool = require("../../pool");

const putIsNotificationChecked = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const notificationID = parseInt(req.params.notificationID);

	try {
		await pool.queryToDatabase(
			`
            UPDATE notifications
            SET
            is_notification_checked=$1
            WHERE id=$2 AND receiver_id=$3;
            `,
			[1, notificationID, userID]
		);

		res.send({
			success: "Success",
		});
	} catch (error) {
		res.send({
			error: {
				catch:
					"There has been an error while updating your notification status",
			},
		});
	}
};

module.exports = putIsNotificationChecked;
