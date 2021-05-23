const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");
const pool = require("../pool");

const categoryRouter = express.Router();

categoryRouter.get("/post-categories", async (req, res) => {
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
	"/post-categories/interest",
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

categoryRouter.post("/search/post-categories", async (req, res) => {
	const { searchInput } = req.body;

	const sqlLikeArray = [
		`${searchInput}%`,
		`%${searchInput}`,
		`%${searchInput}%`,
	];

	try {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			* FROM
			post_categories
			WHERE
			LOWER(title) LIKE $1
			OR
			LOWER(title) LIKE $2
			OR
			LOWER(title) LIKE $3;
			`,
			[...sqlLikeArray]
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: "There has been an error while searching for post categories",
		});
	}
});

module.exports = categoryRouter;
