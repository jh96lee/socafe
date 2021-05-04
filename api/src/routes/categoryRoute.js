const express = require("express");
const { authenticateToken } = require("../middlewares/userMiddleware");
const pool = require("../pool");

const categoryRouter = express.Router();

categoryRouter.get("/post_categories", async (req, res) => {
	try {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT id, title, category_url
            FROM post_categories;
            `
		);

		res.send(rows);
	} catch (error) {
		res.send({
			message: "There has been an error while fetching post categories",
		});
	}
});

// REVIEW: when a user registers or goes to his or her profile and update their top of interests section
// REVIEW: they will need to be authenticated and send an array of topics that they're interested in
categoryRouter.post(
	"/post_categories/interest",
	authenticateToken,
	async (req, res) => {
		const { categories, decoded } = req.body;

		const user_id = decoded.id;
		const categoriesArray = categories;

		if (categoriesArray.length === 0) {
			res.end();
		} else {
			const categoryIDsArray = categoriesArray.map((categoryObject) => {
				return categoryObject.id;
			});

			try {
				for (categoryID of categoryIDsArray) {
					await pool.queryToDatabase(
						`
					INSERT INTO categories_of_interest(user_id, post_category_id)
					VALUES ($1, $2);
					`,
						[user_id, categoryID]
					);
				}

				res.send({ success: { success: "Success" } });
			} catch (error) {
				res.send({
					error: {
						error:
							"There has been an error while processing your categories of interest",
					},
				});
			}
		}
	}
);

module.exports = categoryRouter;
