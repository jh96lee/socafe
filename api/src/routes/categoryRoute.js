const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");
const pool = require("../pool");

const categoryRouter = express.Router();

categoryRouter.get("/category/post", async (req, res) => {
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
			error: {
				general: "There has been an error while fetching post categories",
			},
		});
	}
});

// REVIEW: when a user registers or goes to his or her profile and update their top of interests section
// REVIEW: they will need to be authenticated and send an array of topics that they're interested in
categoryRouter.post(
	"/category/post/interest",
	authenticateToken,
	async (req, res) => {
		const { selectedCategories } = req.body;

		const { userID } = res.locals;

		if (selectedCategories.length === 0) {
			res.send({ success: "Success" });
		} else {
			const categoryIDsArray = selectedCategories.map((category) => {
				return category.id;
			});

			try {
				for (categoryID of categoryIDsArray) {
					await pool.queryToDatabase(
						`
						INSERT INTO categories_of_interest(user_id, post_category_id)
						VALUES ($1, $2);
						`,
						[userID, categoryID]
					);
				}

				res.send({ success: "Success" });
			} catch (error) {
				res.send({
					error: {
						general:
							"There has been an error while processing your categories of interest",
					},
				});
			}
		}
	}
);

categoryRouter.post("/search/post-categories", async (req, res) => {
	const { searchInput } = req.body;

	const like = `%${searchInput}%`;

	try {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			* FROM
			post_categories
			WHERE
			LOWER(title) LIKE $1
			`,
			[like]
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: {
				general: "There has been an error while searching for post categories",
			},
		});
	}
});

module.exports = categoryRouter;
