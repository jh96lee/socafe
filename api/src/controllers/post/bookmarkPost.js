const pool = require("../../pool");

const bookmarkPost = async (req, res) => {
	const postID = parseInt(req.params.postID);
	const userID = parseInt(res.locals.userID);

	try {
		await pool.queryToDatabase(
			`
            INSERT INTO post_bookmarks
            (user_id, post_id)
            VALUES ($1, $2);
            `,
			[userID, postID]
		);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while bookmarking a post",
			},
		});
	}
};

module.exports = bookmarkPost;
