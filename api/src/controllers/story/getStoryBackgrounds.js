const pool = require("../../pool");

const getStoryBackgrounds = async (req, res) => {
	try {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id,
            background_gradient
            FROM story_backgrounds;
            `
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for story backgrounds",
			},
		});
	}
};

module.exports = getStoryBackgrounds;
