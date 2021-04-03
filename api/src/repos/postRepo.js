const pool = require("../pool");

class PostRepo {
	static async uploadPost(title, post_views, user_id) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO posts(title, post_views, user_id)
			VALUES ($1, $2, $3)
			RETURNING *;
			`,
			[title, post_views, user_id]
		);

		return rows[0];
	}

	static async uploadPostContents(content_type, content, post_id) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO post_contents(content_type, content, post_id)
			VALUES ($1, $2, $3);
			`,
			[content_type, content, post_id]
		);

		return rows[0];
	}

	static async insertCategoryAndPostRelation(category_id, post_id) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO categories_posts(category_id, post_id)
			VALUES ($1, $2);
			`,
			[category_id, post_id]
		);

		return rows[0];
	}

	static async fetchPostCategories(post_id) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT * FROM post_categories
			JOIN categories_posts
			ON post_categories.id=categories_posts.category_id
			WHERE categories_posts.post_id=$1;
			`,
			[post_id]
		);

		return rows;
	}

	static async fetchPostContents(post_id) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT 
			posts.id,
			post_contents.content_type AS type,
			post_contents.content AS content
			FROM posts
			JOIN post_contents
			ON posts.id=post_contents.post_id
			WHERE posts.id=$1;
			`,
			[post_id]
		);

		return rows;
	}

	static async fetchBasicPostData(post_id) {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT 
			user_id, created_at, title, post_views 
			FROM posts
			WHERE id=$1;
			`,
			[post_id]
		);

		return rows[0];
	}

	// REVIEW: no need to return the data since the fetching will be done on the post page itself (client)
	static async updatePostTitle(newTitle, post_id) {
		const { rows } = await pool.queryToDatabase(
			`
			UPDATE posts
			SET title=$1
			WHERE id=$2
			`,
			[newTitle, post_id]
		);

		return rows[0];
	}

	static async deletePost(post_id) {
		await pool.queryToDatabase(
			`
			DELETE FROM posts
			WHERE id=$1
			`,
			[post_id]
		);
	}

	static async deleteCategoryPostRelation(post_id) {
		await pool.queryToDatabase(
			`
			DELETE FROM categories_posts
			WHERE post_id=$1
			`,
			[post_id]
		);
	}

	static async deletePostContent(post_id) {
		await pool.queryToDatabase(
			`
			DELETE FROM post_contents
			WHERE post_id=$1
			`,
			[post_id]
		);
	}

	static async incrementPostViewsOfPost(post_id) {
		await pool.queryToDatabase(
			`
			UPDATE posts
			SET post_views=post_views + 1
			WHERE id=$1;
			`,
			[post_id]
		);
	}
}

module.exports = PostRepo;
