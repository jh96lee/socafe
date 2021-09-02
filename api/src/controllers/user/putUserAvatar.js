const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const destroyImage = require("../../utils/image/destroyImage");
const generateToken = require("../../utils/user/generateToken");

const putUserAvatar = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	// REVIEW: this is the new avatar data object
	// REVIEW: keys are id, image_url, image_width, and image_height
	const { updatedAvatar } = req.body;

	const previousAvatarData = await pool.queryToDatabase(
		`
		SELECT
		image_public_id
		FROM user_avatars
		WHERE user_id=$1
		`,
		[userID]
	);

	const previousAvatarPublicID = previousAvatarData.rows[0].image_public_id;

	if (previousAvatarPublicID !== "avatar_default") {
		await destroyImage(previousAvatarPublicID);
	}

	const updatedAvatarData = await pool.queryToDatabase(
		`
		UPDATE user_avatars
		SET 
		image_public_id=$1,
		avatar_url=$2
		WHERE user_id=$3
		RETURNING
		image_public_id,
		avatar_url;
		`,
		[updatedAvatar.id, updatedAvatar.image_url, userID]
	);

	const user = await UserRepo.getUserByID(userID);

	const { id, full_name, username, avatar_url } = user;

	if (updatedAvatarData.rows[0].avatar_url === updatedAvatar.image_url) {
		const token = generateToken({
			id,
			full_name,
			username,
			avatar_url,
		});

		res.send({
			token,
			success: "Success",
		});
	} else {
		res.send({
			error: {
				edit: "There has been an error while updating your avatar",
			},
		});
	}
};

module.exports = putUserAvatar;
