const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const getHomeFeedNotifications = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const homeFeedNotificationsArray = [];

	try {
		const homeFeedNotificationsData = await pool.queryToDatabase(
			`
			SELECT 
			id,
			created_at,
			instigator_id,
			receiver_id,
			post_id,
			instigated_comment_id,
			received_comment_id,
			notification_type,
			is_notification_checked
			FROM notifications
			WHERE receiver_id=$1 AND is_notification_checked=0
			ORDER BY created_at DESC
			LIMIT 5;
            `,
			[userID]
		);

		for (let notification of homeFeedNotificationsData.rows) {
			const { instigator_id } = notification;

			const instigator = await UserRepo.getUserByID(instigator_id);

			homeFeedNotificationsArray.push({
				...notification,
				instigator,
			});
		}

		res.send(homeFeedNotificationsArray);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching your notifications",
			},
		});
	}
};

module.exports = getHomeFeedNotifications;
