const pool = require("../pool");

class UserRepo {
	// TODO: postUserBasics
	static async postUserBasics(
		fullName,
		email,
		username,
		password,
		defaultAvatarURL
	) {
		const { rows } = await pool.queryToDatabase(
			`
            INSERT INTO users
			(full_name, email, username, password, avatar_url)
            VALUES($1, $2, $3, $4, $5)
            RETURNING id, full_name, username, avatar_url;
            `,
			[fullName, email, username, password, defaultAvatarURL]
		);

		return rows[0];
	}

	// TODO: getUserByEmail
	static async getUserByEmail(email) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT 
			id, 
			full_name, 
			username, 
			avatar_url, 
			password 
			FROM users
			WHERE email=$1;
			`,
			[email]
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

	// TODO: getProfileOwnerBasics
	static async getProfileOwnerBasics(ownerUsername) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
			id,
			username,
			full_name,
			avatar_url
			FROM users
			WHERE username=$1;
            `,
			[ownerUsername]
		);

		return rows[0];
	}

	// TODO: getProfileOwnerTotalPosts
	static async getProfileOwnerTotalPosts(ownerID) {
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

	// TODO: getProfileOwnerTotalFollowers
	static async getProfileOwnerTotalFollowers(ownerID) {
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

	// TODO: getProfileOwnerTotalFollowings
	static async getProfileOwnerTotalFollowings(ownerID) {
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

	// TODO: getProfileBio
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

	// TODO: getProfileFollowingTopics
	static async getProfileFollowingTopics(ownerID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT 
            topic_id,
            title,
            topic_url
            FROM topics_users 
            JOIN post_topics
            ON topics_users.topic_id=post_topics.id
            WHERE topics_users.user_id=$1;
            `,
			[ownerID]
		);

		return rows;
	}

	// TODO: getIsVisitorFollowingProfileOwner
	static async getIsVisitorFollowingProfileOwner(ownerID, visitorID) {
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
