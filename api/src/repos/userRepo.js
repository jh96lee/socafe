const pool = require("../pool");

class UserRepo {
	static async checkEmailInUse(email) {
		// REVIEW: RETURNING is not in need because we querying for the data
		const { rows } = await pool.queryToDatabase(
			`
			SELECT * FROM users
			WHERE email=$1;
			`,
			[email]
		);

		return rows[0];
	}

	static async checkUsernameInUse(username) {
		// REVIEW: RETURNING is not in need because we querying for the data
		const { rows } = await pool.queryToDatabase(
			`
			SELECT * FROM users
			WHERE username=$1;
			`,
			[username]
		);

		return rows[0];
	}

	// TODO: when a user registers or logs in, then we want to send back a JSON web token
	static async registerUser({
		username,
		first_name,
		last_name,
		bio,
		avatar_url,
		email,
		password,
	}) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO users(username, first_name, last_name, bio, avatar_url, email, password)
			VALUES($1, $2, $3, $4, $5, $6, $7)
			RETURNING *;
	        `,
			[username, first_name, last_name, bio, avatar_url, email, password]
		);

		// REVIEW: this gives back an array
		return rows[0];
	}

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
			`,
			[id]
		);
	}
}

module.exports = UserRepo;
