const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");

const pool = require("../pool");

const commentRouter = express.Router();

module.exports = commentRouter;
