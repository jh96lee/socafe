const express = require("express");

const pool = require("../pool");

const UserRepo = require("../repos/user-repo");

const authenticateToken = require("../middlewares/user/authenticateToken");
const {
	cloudinaryConfigMiddleware,
} = require("../middlewares/cloudinaryMiddleware");

const getUserStoryIDs = require("../controllers/story/getUserStoryIDs");
const getUserStories = require("../controllers/story/getUserStories");
const getStoryBackgrounds = require("../controllers/story/getStoryBackgrounds");
const uploadStory = require("../controllers/story/uploadStory");
const getUserStory = require("../controllers/story/getUserStory");
const getHomeFeedStories = require("../controllers/story/getHomeFeedStories");
const getUserProfileStories = require("../controllers/story/getUserProfileStories");
const deleteStory = require("../controllers/story/deleteStory");

const storyRouter = express.Router();

// REVIEW: this is for Avatar component's isAvatarRingFilled logic
storyRouter.get("/story/ids/:userID", getUserStoryIDs);

storyRouter.get("/story/stories/:userID", getUserStories);

storyRouter.get("/story/backgrounds", getStoryBackgrounds);

storyRouter.post("/upload/story", authenticateToken, uploadStory);

storyRouter.get("/story/:storyID/:ownerID", getUserStory);

storyRouter.get("/story/feed", authenticateToken, getHomeFeedStories);

storyRouter.get("/profile/story", authenticateToken, getUserProfileStories);

storyRouter.delete(
	"/story/:storyID",
	authenticateToken,
	cloudinaryConfigMiddleware,
	deleteStory
);

module.exports = storyRouter;
