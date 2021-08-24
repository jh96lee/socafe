const pool = require("../pool");

class UserRepo {
	// REVIEW: getUserByID
	static async getUserByID(userID) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			users.id AS id,
			users.created_at AS created_at,
			username,
			full_name,
			email,
			avatar_url
			FROM users
			JOIN user_avatars
			ON users.id=user_avatars.user_id
			WHERE users.id=$1;
			`,
			[userID]
		);

		return rows[0];
	}

	// REVIEW: getUserByUsername
	static async getUserByUsername(username) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			users.id AS id,
			users.created_at AS created_at,
			username,
			full_name,
			email,
			avatar_url
			FROM users
			JOIN user_avatars
			ON users.id=user_avatars.user_id
			WHERE LOWER(users.username)=$1;
			`,
			[username.toLowerCase()]
		);

		return rows[0];
	}

	// REVIEW: getUserPassword
	static async getUserPassword(email) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			users.id AS id,
			users.created_at AS created_at,
			username,
			full_name,
			email,
			avatar_url,
			password
			FROM users
			JOIN user_avatars
			ON users.id=user_avatars.user_id
			WHERE users.email=$1;
			`,
			[email]
		);

		return rows[0];
	}

	// REVIEW: insertUser
	static async insertUser(fullName, email, username, password) {
		const { rows } = await pool.queryToDatabase(
			`
            INSERT INTO users
			(full_name, email, username, password)
            VALUES ($1, $2, $3, $4)
            RETURNING id, full_name, username;
            `,
			[fullName, email, username, password]
		);

		return rows[0];
	}

	// REVIEW: insertUser
	static async insertDefaultAvatar(userID) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO user_avatars
			(image_public_id, avatar_url, user_id)
			VALUES ($1, $2, $3)
			RETURNING 
			id,
			image_public_id,
			avatar_url,
			user_id
			`,
			[
				"avatar_default",
				"https://res.cloudinary.com/fullstackprojectcloud/image/upload/v1628146457/avatar_default.png",
				userID,
			]
		);

		return rows[0];
	}

	// TODO: searchUsersByUsername
	static async searchUsersByUsername(searchedUsernameInput) {
		const like = `%${searchedUsernameInput}%`;

		const { rows } = await pool.queryToDatabase(
			`
			SELECT 
			id, 
			full_name, 
			username, 
			avatar_url 
			FROM users 
			WHERE LOWER(username) LIKE $1
			`,
			[like]
		);

		return rows;
	}

	// REVIEW: getProfileTotalPosts
	static async getProfileTotalPosts(ownerID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            COUNT(*)::INT
            FROM posts
            WHERE user_id=$1
            `,
			[ownerID]
		);

		return rows[0].count;
	}

	// REVIEW: getProfileTotalFollowers
	static async getProfileTotalFollowers(ownerID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(*)::INT
            FROM following 
            WHERE leader_id=$1;
            `,
			[ownerID]
		);

		return rows[0].count;
	}

	// REVIEW: getProfileTotalFollowings
	static async getProfileTotalFollowings(ownerID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(*)::INT
            FROM following 
            WHERE follower_id=$1;
            `,
			[ownerID]
		);

		return rows[0].count;
	}

	// REVIEW: getProfileBio
	static async getProfileBio(ownerID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            node_type,
            node_value
            FROM user_bios
            WHERE user_id=$1;
            `,
			[ownerID]
		);

		return rows;
	}

	// REVIEW: getProfileIsFollowing
	static async getProfileIsFollowing(ownerID, visitorID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id
            FROM following
            WHERE leader_id=$1 AND follower_id=$2;
            `,
			[ownerID, visitorID]
		);

		return rows[0] ? true : false;
	}
}

module.exports = UserRepo;
