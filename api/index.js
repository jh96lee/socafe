const app = require("./src/app");
const pool = require("./src/pool");

pool
	.connectToDatabase({
		host: "localhost",
		port: 5432,
		database: "socafe",
		user: "joohyunglee",
		password: "",
	})
	.then(() => {
		app().listen(8080, () => {
			console.log("Listening to port 8080");
		});
	})
	.catch((err) => console.log(err));
