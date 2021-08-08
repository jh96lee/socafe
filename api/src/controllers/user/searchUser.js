const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const searchUser = async (req, res) => {
	const { searchInput } = req.body;

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	const likeSearchInput = `%${searchInput}%`;

	try {
		const users = await pool.queryToDatabase(
			`
			SELECT
			u_id AS id,
			full_name,
			username,
			avatar_url
			FROM (
				SELECT
				*,
				users.id AS u_id,
				ROW_NUMBER() OVER (ORDER BY users.id) AS index 
				FROM users
				JOIN user_avatars
				ON users.id=user_avatars.user_id
				WHERE LOWER(username) LIKE $1
			) AS u
			WHERE index BETWEEN $2 AND $3;
			`,
			[likeSearchInput, betweenFront, betweenBack]
		);

		const nextUser = await pool.queryToDatabase(
			`
			SELECT
			u_id AS id,
			full_name,
			username,
			avatar_url
			FROM (
				SELECT
				*,
				users.id AS u_id,
				ROW_NUMBER() OVER (ORDER BY users.id) AS index 
				FROM users
				JOIN user_avatars
				ON users.id=user_avatars.user_id
				WHERE LOWER(username) LIKE $1
			) AS u
			WHERE index > $2
			LIMIT 1;
			`,
			[likeSearchInput, betweenBack]
		);

		const nextAPIEndpoint = nextUser.rows[0]
			? `/search/users?page=${page + 1}&size=${size}`
			: null;

		res.send({
			contents: users.rows,
			next: nextAPIEndpoint,
		});
	} catch (error) {
		res.send({
			error: {
				searchUser: "There has been an error while searching for users",
			},
		});
	}
};

module.exports = searchUser;
