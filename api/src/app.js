const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const fileRouter = require("./routes/fileRoute");
const commentRouter = require("./routes/commentRoute");
const likeRouter = require("./routes/likeRoute");
const followRouter = require("./routes/followRoute");
const storyRouter = require("./routes/storyRoute");

module.exports = () => {
	const app = express();

	if (process.env.NODE_ENV !== "production") {
		// TODO: automatically load the .env file in the root and initialize the values
		dotenv.config();
	}

	// REVIEW: this allows us to access the body of request
	app.use(express.json());

	app.use(userRouter);
	app.use(postRouter);
	app.use(fileRouter);
	app.use(commentRouter);
	app.use(likeRouter);
	app.use(followRouter);
	app.use(storyRouter);

	// TODO: this is for that annoying cors error
	app.use(cors({ origin: "*" }));

	return app;
};
