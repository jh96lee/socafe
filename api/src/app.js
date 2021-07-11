const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const fileRouter = require("./routes/fileRoute");
const commentRouter = require("./routes/commentRoute");
const likeRouter = require("./routes/likeRoute");
const followRouter = require("./routes/followRoute");
const storyRouter = require("./routes/storyRoute");
const reactionRouter = require("./routes/reactionRoute");
const topicRouter = require("./routes/topicRoute");

module.exports = () => {
	const app = express();

	// TODO: this is for that annoying cors error
	app.use(cors({ origin: true }));

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
	app.use(reactionRouter);
	app.use(topicRouter);

	app.use(cookieParser);

	return app;
};
