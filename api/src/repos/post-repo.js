const pool = require("../pool");

class PostRepo {
	static async getPostBasics(postID) {
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

	static async getPostImages(postID) {
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

	static async getPostTopics(postID) {
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

	static async getPostOwner(ownerID) {
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

	static async getPostCaptions(postID) {
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

	static async getPostTaggedUsers(postID) {
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

	static async getPostTotalLikes(postID) {
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

	static async getPostTotalComments(postID) {
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

	static async getPostIsLiked(visitorID, postID) {
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

	static async getPostIsBookmarked(visitorID, postID) {
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
