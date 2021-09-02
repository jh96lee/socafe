const pool = require("../../pool");

const putUserProfile = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { fullName, username, email, bioNodesArray } = req.body;

	try {
		if (fullName) {
			await pool.queryToDatabase(
				`
                UPDATE users
                SET
                full_name=$1
                WHERE id=$2;
                `,
				[fullName, userID]
			);
		}

		if (username) {
			await pool.queryToDatabase(
				`
                UPDATE users
                SET
                username=$1
                WHERE id=$2;
                `,
				[username, userID]
			);
		}

		if (email) {
			await pool.queryToDatabase(
				`
                UPDATE users
                SET
                email=$1
                WHERE id=$2;;
                `,
				[email, userID]
			);
		}

		if (bioNodesArray.length > 0) {
			await pool.queryToDatabase(
				`
                DELETE 
                FROM user_bios
                WHERE user_id=$1
                `,
				[userID]
			);

			for (let node of bioNodesArray) {
				const { nodeType, nodeValue } = node;

				await pool.queryToDatabase(
					`
                    INSERT INTO user_bios
                    (node_type, node_value, user_id)
                    VALUES
                    ($1, $2, $3);
                    `,
					[nodeType, nodeValue, userID]
				);
			}
		}

		const user = await UserRepo.getUserByID(userID);

		if (user) {
			const token = generateToken({
				id: user.id,
				full_name: user.full_name,
				username: user.username,
				avatar_url: user.avatar_url,
			});

			res.send({
				token,
				success: "Success",
			});
		}
	} catch (error) {
		res.send({
			error: { catch: "There has been an error while updating your profile" },
		});
	}
};

module.exports = putUserProfile;
