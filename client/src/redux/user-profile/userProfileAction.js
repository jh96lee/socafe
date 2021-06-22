import axios from "axios";

const startFetchingUserProfile = () => ({
	type: "START_FETCHING_USER_PROFILE",
});

const fetchedUserProfile = (userProfile) => ({
	type: "FETCHED_USER_PROFILE",
	payload: userProfile,
});

const fetchedTotalFollowers = (totalFollowers) => ({
	type: "FETCHED_TOTAL_FOLLOWERS",
	payload: totalFollowers,
});

const fetchedTotalFollowing = (totalFollowing) => ({
	type: "FETCHED_TOTAL_FOLLOWING",
	payload: totalFollowing,
});

const endFetchingUserProfile = () => ({
	type: "END_FETCHING_USER_PROFILE",
});

export const fetchUserProfile = (leaderID, visitorID) => async (dispatch) => {
	dispatch(startFetchingUserProfile());

	const { data } = await axios({
		method: "GET",
		url: `http://localhost:8080/profile/user/${leaderID}/${visitorID}`,
	});

	const {
		avatar_url,
		bio,
		full_name,
		username,
		isFollowing,
		totalFollowers,
		totalFollowing,
		totalPosts,
	} = data;

	if (data) {
		dispatch(
			fetchedUserProfile({
				avatar_url,
				bio,
				full_name,
				username,
				isFollowing,
				totalPosts,
			})
		);

		dispatch(fetchedTotalFollowers(totalFollowers));

		dispatch(fetchedTotalFollowing(totalFollowing));

		dispatch(endFetchingUserProfile());
	}
};

export const incrementTotalFollowers = () => ({
	type: "INCREMENT_TOTAL_FOLLOWERS",
});

export const decrementTotalFollowers = () => ({
	type: "DECREMENT_TOTAL_FOLLOWERS",
});

export const incrementTotalFollowing = () => ({
	type: "INCREMENT_TOTAL_FOLLOWING",
});

export const decrementTotalFollowing = () => ({
	type: "DECREMENT_TOTAL_FOLLOWING",
});
