const pool = require("../pool");

class CommentRepo {
	static async createComment(parent_comment_id, user_id, post_id) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO comments(parent_comment_id, user_id, post_id)
			VALUES ($1, $2, $3)
			RETURNING *;
			`,
			[parent_comment_id, user_id, post_id]
		);

		return rows[0];
	}

	static async insertCommentContent(content_type, content, comment_id) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO comment_contents(content_type, content, comment_id)
			VALUES ($1, $2, $3)
            RETURNING *;
			`,
			[content_type, content, comment_id]
		);

		return rows[0];
	}

	static async fetchBasicCommentData(comment_id) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT id, parent_comment_id, post_id, user_id
            FROM comments
            WHERE id=$1
            `,
			[comment_id]
		);

		return rows[0];
	}

	static async deleteComment(comment_id) {
		await pool.queryToDatabase(
			`
            DELETE FROM comments
            WHERE id=$1
            `,
			[comment_id]
		);
	}

	static async fetchUserDataAndParentCommentData(post_id) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			users.id AS user_id,
			users.username AS username,
			users.avatar_url AS avatar_url,
			comments.id AS comment_id
			FROM comments
			JOIN users
			ON comments.user_id=users.id
			WHERE post_id=$1 AND comments.parent_comment_id IS NULL
			LIMIT 7;
			`,
			[post_id]
		);

		return rows;
	}

	static async fetchUserDataAndReplyData(parent_comment_id) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			users.id AS user_id,
			users.username AS username,
			users.avatar_url AS avatar_url,
			comments.id AS comment_id
			FROM comments
			JOIN users
			ON comments.user_id=users.id
			WHERE comments.parent_comment_id=$1;
			`,
			[parent_comment_id]
		);

		return rows;
	}

	static async fetchCommentContents(comment_id) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT 
            id,
            content_type,
            content
            FROM comment_contents 
            WHERE comment_id=$1;
	        `,
			[comment_id]
		);

		return rows;
	}
}

module.exports = CommentRepo;
