const express = require("express");

const { authenticateToken } = require("../middlewares/userMiddleware");
const pool = require("../pool");

const followRouter = express.Router();

module.exports = followRouter;
