const pool = require("../pool");

class UserRepo {
	static async updateUser(columnName, newValue, user_id) {
		const column = columnName;

		const { rows } = await pool.queryToDatabase(
			`
			UPDATE users
			SET ${column}=$1
			WHERE id=$2
			RETURNING *;
			`,
			[newValue, user_id]
		);

		return rows[0];
	}

	static async deleteUser(id) {
		const { rows } = await pool.queryToDatabase(
			`
			DELETE FROM users
			WHERE id=$1
			RETURNING *;
			`,
			[id]
		);

		return rows[0];
	}
}

module.exports = UserRepo;
