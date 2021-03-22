const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/usersRoute");

module.exports = () => {
	const app = express();

	app.use(userRouter);

	// TODO: this is for that annoying cors error
	app.use(cors({ origin: "*" }));

	return app;
};
