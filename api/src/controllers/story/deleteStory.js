const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");
const StoryRepo = require("../../repos/story-repo");

const destroyImage = require("../../utils/image/destroyImage");

const deleteStory = async (req, res) => {
	const storyID = parseInt(req.params.storyID);

	try {
		const storyImage = await StoryRepo.getStoryImageByID(storyID);

		if (storyImage) {
			const { image_public_id } = storyImage;

			await destroyImage(image_public_id);
		}

		await pool.queryToDatabase(
			`
            DELETE 
            FROM stories
            WHERE id=$1;
            `,
			[storyID]
		);

		res.send({
			success: "Success",
		});
	} catch (error) {
		res.send({
			error: { catch: "There has been an error while deleting your story" },
		});
	}
};

module.exports = deleteStory;
