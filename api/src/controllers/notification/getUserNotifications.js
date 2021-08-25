const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getUserNotifications = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	try {
		const notificationsData = await pool.queryToDatabase(
			`
            SELECT
            id,
            created_at,
            instigator_id,
            receiver_id,
            post_id,
            instigated_comment_id,
            received_comment_id,
            notification_type
            FROM (
                SELECT 
                *,
                ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
                FROM notifications
                WHERE receiver_id=$1
            ) AS n
            WHERE index BETWEEN $2 AND $3;
            `,
			[userID, betweenFront, betweenBack]
		);

		const nextNotificationData = await pool.queryToDatabase(
			`
            SELECT
            id,
            instigator_id,
            receiver_id,
            post_id,
            instigated_comment_id,
            received_comment_id,
            notification_type
            FROM (
                SELECT 
                *,
                ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
                FROM notifications
                WHERE receiver_id=$1
            ) AS n
            WHERE index > $2
            LIMIT 1;
            `,
			[userID, betweenBack]
		);

		const nextAPIEndpoint = nextNotificationData.rows[0]
			? `/notification/user?page=${page + 1}&size=${size}`
			: null;

		const notificationsArray = [];

		for (let notification of notificationsData.rows) {
			const { instigator_id } = notification;

			const instigator = await UserRepo.getUserByID(instigator_id);

			notificationsArray.push({
				...notification,
				instigator,
			});
		}

		res.send({ contents: notificationsArray, next: nextAPIEndpoint });
	} catch (error) {
		console.log(error);
		res.send({
			error: {
				catch: "There has been an error while fetching for your notifications",
			},
		});
	}
};

module.exports = getUserNotifications;
