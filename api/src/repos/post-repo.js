const pool = require("../pool");

class PostRepo {
	static async getPostBasicData(postID) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			updated_at,
			user_id
			FROM posts
			WHERE id=$1;
			`,
			[postID]
		);

		return rows[0];
	}

	static async getPostImagesData(postID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT 
            image_url AS url, 
            image_width AS width, 
            image_height AS height
            FROM post_images 
            WHERE post_id=$1;
            `,
			[postID]
		);

		return rows;
	}

	static async getPostTopicsData(postID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            topic_id,
            title
            FROM topics_posts
            JOIN post_topics
            ON topics_posts.topic_id=post_topics.id
            WHERE post_id=$1;
            `,
			[postID]
		);

		return rows;
	}

	static async getPostOwnerData(ownerID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            users.id AS user_id,
            users.full_name AS full_name,
            users.username AS username,
            users.avatar_url AS avatar_url
            FROM users
            WHERE id=$1;
            `,
			[ownerID]
		);

		return rows[0];
	}

	static async getPostCaptionsData(postID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            node_type,
            node_value
            FROM post_captions
            WHERE post_id=$1;
            `,
			[postID]
		);

		return rows;
	}

	static async getPostTaggedUsersData(postID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            users.id AS user_id,
            users.full_name AS full_name,
            users.username AS username,
            users.avatar_url AS avatar_url
            FROM users_posts
            JOIN users
            ON users.id=users_posts.user_id
            WHERE post_id=$1;
            `,
			[postID]
		);

		return rows;
	}

	static async getPostTotalLikesData(postID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            COUNT(*)::INT 
            FROM post_likes
            WHERE post_id=$1;
            `,
			[postID]
		);

		return rows[0].count;
	}

	static async getPostTotalCommentsData(postID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            COUNT(*)::INT
            FROM comments
            WHERE post_id=$1 AND parent_comment_id IS NULL;
            `,
			[postID]
		);

		return rows[0].count;
	}

	static async getPostIsLikedData(visitorID, postID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id
            FROM post_likes
            WHERE user_id=$1 AND post_id=$2;
            `,
			[visitorID, postID]
		);

		return rows[0] ? true : false;
	}

	static async getPostIsBookmarkedData(visitorID, postID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id
            FROM post_bookmarks
            WHERE user_id=$1 AND post_id=$2;
            `,
			[visitorID, postID]
		);

		return rows[0] ? true : false;
	}
}

module.exports = PostRepo;
