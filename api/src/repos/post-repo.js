const pool = require("../pool");

class PostRepo {
	static async getPost(postID) {
		// FIX
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

	static async getDefaultExplorePosts(userID, betweenFront, betweenBack) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			*
			FROM (
				SELECT
				*,
				ROW_NUMBER() OVER (ORDER BY count DESC) AS index
				FROM (
					SELECT
					t.post_id AS post_id,
					COUNT(*)
					FROM (
						SELECT
						post_id
						FROM posts
						JOIN topics_posts
						ON topics_posts.post_id=posts.id
						WHERE topic_id IN (
							SELECT
							topic_id
							FROM topics_users
							WHERE user_id=$1
							UNION
							SELECT
							DISTINCT topic_id
							FROM posts
							JOIN post_likes
							ON posts.id=post_likes.post_id
							JOIN topics_posts
							ON posts.id=topics_posts.post_id
							WHERE post_likes.user_id=$1
							LIMIT 10
						)
						GROUP BY post_id
					) AS t
					LEFT JOIN post_likes
					ON t.post_id=post_likes.post_id
					GROUP BY t.post_id
				) AS o
			) AS f
			WHERE index BETWEEN $2 AND $3;
			`,
			[userID, betweenFront, betweenBack]
		);

		return rows;
	}

	static async getDefaultNextExplorePost(userID, betweenBack) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			*
			FROM (
				SELECT
				*,
				ROW_NUMBER() OVER (ORDER BY count DESC) AS index
				FROM (
					SELECT
					t.post_id AS post_id,
					COUNT(*)
					FROM (
						SELECT
						post_id
						FROM posts
						JOIN topics_posts
						ON topics_posts.post_id=posts.id
						WHERE topic_id IN (
							SELECT
							topic_id
							FROM topics_users
							WHERE user_id=$1
							UNION
							SELECT
							DISTINCT topic_id
							FROM posts
							JOIN post_likes
							ON posts.id=post_likes.post_id
							JOIN topics_posts
							ON posts.id=topics_posts.post_id
							WHERE post_likes.user_id=$1
							LIMIT 10
						)
						GROUP BY post_id
					) AS t
					LEFT JOIN post_likes
					ON t.post_id=post_likes.post_id
					GROUP BY t.post_id
				) AS o
			) AS f
			WHERE index > $2
		    LIMIT 1;
			`,
			[userID, betweenBack]
		);

		return rows[0];
	}

	static async getSpecificExplorePosts(topicIDs, betweenFront, betweenBack) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			*
			FROM (
				SELECT
				*,
				ROW_NUMBER() OVER (ORDER BY count DESC) AS index
				FROM (
					SELECT
					t.post_id AS post_id,
					COUNT(*)
					FROM (
						SELECT
						post_id
						FROM posts
						JOIN topics_posts
						ON topics_posts.post_id=posts.id
						WHERE topic_id IN (
							${topicIDs}
						)
						GROUP BY post_id
					) AS t
					LEFT JOIN post_likes
					ON t.post_id=post_likes.post_id
					GROUP BY t.post_id
				) AS o
			) AS f
			WHERE index BETWEEN $1 AND $2;
		    `,
			[betweenFront, betweenBack]
		);

		return rows;
	}

	static async getSpecificNextExplorePost(topicIDs, betweenBack) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			*
			FROM (
				SELECT
				*,
				ROW_NUMBER() OVER (ORDER BY count DESC) AS index
				FROM (
					SELECT
					t.post_id AS post_id,
					COUNT(*)
					FROM (
						SELECT
						post_id
						FROM posts
						JOIN topics_posts
						ON topics_posts.post_id=posts.id
						WHERE topic_id IN (
							${topicIDs}
						)
						GROUP BY post_id
					) AS t
					LEFT JOIN post_likes
					ON t.post_id=post_likes.post_id
					GROUP BY t.post_id
				) AS o
			) AS f
			WHERE index > $1
		    LIMIT 1;
		    `,
			[betweenBack]
		);

		return rows[0];
	}
}

module.exports = PostRepo;
