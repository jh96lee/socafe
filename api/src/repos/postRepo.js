const pool = require("../pool");

class PostRepo {
	static async uploadPost({ post_structure, user_id }) {
		const { rows } = await pool.queryToDatabase(
			`
            INSERT INTO posts(post_structure, user_id)
            VALUES($1, $2)
            RETURNING *;
            `,
			[post_structure, user_id]
		);

		return rows[0];
	}
}

module.exports = PostRepo;
