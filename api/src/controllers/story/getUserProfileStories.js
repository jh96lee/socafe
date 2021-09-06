const pool = require("../../pool");

const StoryRepo = require("../../repos/story-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getUserProfileStories = async (req, res) => {
	const ownerID = parseInt(res.locals.userID);

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	const userProfileStoriesArray = [];

	try {
		const userProfileStoriesData = await pool.queryToDatabase(
			`
			SELECT
			id,
			created_at,
			user_id
			FROM (
				SELECT 
				id,
				created_at,
				user_id,
				ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
				FROM stories
				WHERE user_id=$1
			) AS s
			WHERE index BETWEEN $2 AND $3;
            `,
			[ownerID, betweenFront, betweenBack]
		);

		const nextUserProfileNextStoryData = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM (
				SELECT 
				id,
				created_at,
				user_id,
				ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
				FROM stories
				WHERE user_id=$1
			) AS s
			WHERE index > $2
            LIMIT 1;
            `,
			[ownerID, betweenBack]
		);

		const nextAPIEndpoint = nextUserProfileNextStoryData.rows[0]
			? `/profile/story?page=${page + 1}&size=${size}`
			: null;

		for (let userProfileStory of userProfileStoriesData.rows) {
			const { id: storyID } = userProfileStory;

			const storyBackground = await StoryRepo.getStoryBackgroundByID(storyID);

			const storyImage = await StoryRepo.getStoryImageByID(storyID);

			const storyText = await StoryRepo.getStoryTextByID(storyID);

			userProfileStoriesArray.push({
				id: storyID,
				story_background: storyBackground,
				story_image: storyImage,
				story_text: storyText,
			});
		}

		res.send({ contents: userProfileStoriesArray, next: nextAPIEndpoint });
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for your stories",
			},
		});
	}
};

module.exports = getUserProfileStories;
