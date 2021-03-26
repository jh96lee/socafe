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
	static async registerUser({ username, bio, avatar_url, email, password }) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO users(username, bio, avatar_url, email, password)
			VALUES($1, $2, $3, $4, $5)
			RETURNING *;
	        `,
			[username, bio, avatar_url, email, password]
		);

		// REVIEW: this gives back an array
		return rows[0];
	}
}

module.exports = UserRepo;
