const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
	res.send({
		key: "working",
	});
});

module.exports = userRouter;
