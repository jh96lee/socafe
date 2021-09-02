const pool = require("../../pool");

const putUserPassword = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { oldPassword, newPassword } = req.body;

	const { rows } = await pool.queryToDatabase(
		`
        SELECT
        password
        FROM users
        WHERE id=$1
        `,
		[userID]
	);

	const { password } = rows[0];

	bcrypt.compare(oldPassword, password, async (err, result) => {
		if (err) {
			res.send({
				error: {
					login: "There has been an error while validating your password",
				},
			});
		} else if (result) {
			const salt = bcrypt.genSaltSync(10);

			const hashedPassword = bcrypt.hashSync(newPassword, salt);

			await pool.queryToDatabase(
				`
                UPDATE users
                SET
                password=$1
                WHERE id=$2;
                `,
				[hashedPassword, userID]
			);

			res.send({
				success: "Success",
			});
		} else if (!result) {
			res.send({
				error: {
					oldPassword:
						"The old password you entered is incorrect. Please try again.",
				},
			});
		}
	});
};

module.exports = putUserPassword;
