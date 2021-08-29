const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");
const StoryRepo = require("../../repos/story-repo");

const getUserStory = async (req, res) => {
	const storyID = parseInt(req.params.storyID);
	const ownerID = parseInt(req.params.ownerID);

	try {
		const storyBasics = await StoryRepo.getStoryBasicsByID(storyID);

		if (!storyBasics) {
			res.send({ error: { story: "Story does not exist" } });
		} else if (parseInt(storyBasics.user_id) !== ownerID) {
			res.send({ error: { story: "Story not found" } });
		} else {
			const ownerID = storyBasics.user_id;

			const storyOwner = await UserRepo.getUserByID(ownerID);

			const storyBackground = await StoryRepo.getStoryBackgroundByID(storyID);

			const storyImage = await StoryRepo.getStoryImageByID(storyID);

			const storyText = await StoryRepo.getStoryTextByID(storyID);

			res.send({
				...storyBasics,
				story_owner: storyOwner,
				story_background: storyBackground,
				story_image: storyImage,
				story_text: storyText,
			});
		}
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching your story",
			},
		});
	}
};

module.exports = getUserStory;
