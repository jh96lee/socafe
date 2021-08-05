const UserRepo = require("../../repos/user-repo");
const TopicRepo = require("../../repos/topic-repo");

const getProfileOwner = async (req, res) => {
	const ownerUsername = req.params.ownerUsername;
	const visitorID = parseInt(req.params.visitorID);

	try {
		const profileOwner = await UserRepo.getUserByUsername(ownerUsername);

		if (profileOwner) {
			const ownerID = profileOwner.id;

			const profileTotalPosts = await UserRepo.getProfileTotalPosts(ownerID);

			const profileTotalFollowers = await UserRepo.getProfileTotalFollowers(
				ownerID
			);

			const profileTotalFollowings = await UserRepo.getProfileTotalFollowings(
				ownerID
			);

			const profileBio = await UserRepo.getProfileBio(ownerID);

			const userFollowingTopics = await TopicRepo.getUserFollowingTopics(
				ownerID
			);

			const profileIsFollowing = await UserRepo.getProfileIsFollowing(
				ownerID,
				visitorID
			);

			res.send({
				...profileOwner,
				profile_total_posts: profileTotalPosts,
				profile_total_followers: profileTotalFollowers,
				profile_total_followings: profileTotalFollowings,
				profile_bio_nodes_array: profileBio,
				profile_following_topics_array: userFollowingTopics,
				profile_is_following: profileIsFollowing,
			});
		} else {
			res.send({
				error: {
					profile: "User not found",
				},
			});
		}
	} catch (error) {
		console.log(error);
		res.send({
			error: {
				catch: "There has been an error while fetching for profile data",
			},
		});
	}
};

module.exports = getProfileOwner;
