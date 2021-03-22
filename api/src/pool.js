// REVIEW: a single client can only make one query at a time
// TODO: to allow multiple queries to be made at the same time, we create a pool that manages multiple clients
const pg = require("pg");

class Pool {
	pool = null;

	connectToDatabase(optionsObject) {
		this.pool = new pg.Pool(optionsObject);

		// TODO: to make connections to the database, we need to make a query first, so we make a very simple query
		return this.pool.query("SELECT 1 + 1;");
	}

	closeDatabase() {
		return this.pool.end();
	}

	queryToDatabase(sql, arrayOfParams) {
		return this.pool.query(sql, arrayOfParams);
	}
}

module.exports = new Pool();
