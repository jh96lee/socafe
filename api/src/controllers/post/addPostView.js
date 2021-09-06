const pool = require("../../pool");

const addPostView = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const postID = parseInt(req.params.postID);

	try {
		await pool.queryToDatabase(
			`
            INSERT INTO post_views
            (user_id, post_id)
            VALUES ($1, $2)
            RETURNING id;
            `,
			[userID, postID]
		);

		res.send({
			success: "Success",
		});
	} catch (error) {
		res.send({
			error: { catch: "There has been an error while registering your view" },
		});
	}
};

module.exports = addPostView;
