const pool = require("../../pool");

const addStoryView = async (req, res) => {
	const userID = parseInt(res.locals.userID);
	const storyID = parseInt(req.params.storyID);

	try {
		await pool.queryToDatabase(
			`
            INSERT INTO story_views
            (user_id, story_id)
            VALUES ($1, $2)
            RETURNING id;
            `,
			[userID, storyID]
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

module.exports = addStoryView;
