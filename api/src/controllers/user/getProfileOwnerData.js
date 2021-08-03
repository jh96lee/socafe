const UserRepo = require("../../repos/user-repo");

const getProfileOwnerData = async (req, res) => {
	const ownerUsername = req.params.ownerUsername;
	const visitorID = parseInt(req.params.visitorID);

	try {
		const profileOwnerBasicsData = await UserRepo.getProfileOwnerBasics(
			ownerUsername
		);

		if (profileOwnerBasicsData) {
			const ownerID = profileOwnerBasicsData.id;

			const profileOwnerTotalPostsData =
				await UserRepo.getProfileOwnerTotalPosts(ownerID);

			const profileOwnerTotalFollowersData =
				await UserRepo.getProfileOwnerTotalFollowers(ownerID);

			const profileOwnerTotalFollowingsData =
				await UserRepo.getProfileOwnerTotalFollowings(ownerID);

			const profileBioData = await UserRepo.getProfileBio(ownerID);

			const profileFollowingTopicsData =
				await UserRepo.getProfileFollowingTopics(ownerID);

			const isVisitorFollowingProfileOwnerData =
				await UserRepo.getIsVisitorFollowingProfileOwner(ownerID, visitorID);

			res.send({
				...profileOwnerBasicsData,
				user_profile_total_posts: profileOwnerTotalPostsData,
				user_profile_total_followers: profileOwnerTotalFollowersData,
				user_profile_total_followings: profileOwnerTotalFollowingsData,
				user_profile_following_topics_array: profileFollowingTopicsData,
				user_profile_bio_nodes_array: profileBioData,
				user_profile_is_following: isVisitorFollowingProfileOwnerData,
			});
		} else {
			res.send({
				id: null,
			});
		}
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching for profile data",
			},
		});
	}
};

module.exports = getProfileOwnerData;
