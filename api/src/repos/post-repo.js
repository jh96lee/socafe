const pool = require("../pool");

class PostRepo {
	static async getPost(postID) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			id,
			created_at,
			user_id AS id
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
			image_public_id,
            image_url, 
            image_width, 
            image_height
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
            topic_id AS id,
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

	static async getTaggedUsersID(postID) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			user_id AS id
			FROM users_posts
			WHERE post_id=$1
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

	static async getPostTotalViews(postID) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			COUNT(id)::INT
			FROM post_views
			WHERE post_id=$1
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
