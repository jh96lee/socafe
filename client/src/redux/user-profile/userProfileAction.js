import axios from "axios";

import { fetchToken } from "../../utils/cookie/fetchToken";

const startFetchingUserProfile = () => ({
	type: "START_FETCHING_USER_PROFILE",
});

const fetchedUserProfile = (userProfile) => ({
	type: "FETCHED_USER_PROFILE",
	payload: userProfile,
});

const endFetchingUserProfile = () => ({
	type: "END_FETCHING_USER_PROFILE",
});

const setUserProfileErrorMessage = (errorMessage) => ({
	type: "SET_USER_PROFILE_ERROR_MESSAGE",
	payload: errorMessage,
});

export const setIsVisitorFollowing = () => ({
	type: "SET_IS_VISITOR_FOLLOWING",
});

export const incrementUserTotalFollowers = () => ({
	type: "INCREMENT_USER_TOTAL_FOLLOWERS",
});

export const decrementUserTotalFollowers = () => ({
	type: "DECREMENT_USER_TOTAL_FOLLOWERS",
});

export const incrementUserTotalFollowings = () => ({
	type: "INCREMENT_USER_TOTAL_FOLLOWINGS",
});

export const decrementUserTotalFollowings = () => ({
	type: "DECREMENT_USER_TOTAL_FOLLOWINGS",
});

export const fetchUserProfile =
	(leaderUsername, visitorID) => async (dispatch) => {
		dispatch(startFetchingUserProfile());

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/profile/user/${leaderUsername}/${visitorID}`,
		});

		const {
			id,
			avatar_url,
			username,
			full_name,
			user_profile_bio_nodes_array,
			user_profile_following_topics_array,
			user_profile_is_following,
			user_profile_total_followers,
			user_profile_total_followings,
			user_profile_total_posts,
			error,
		} = data;

		if (error) {
			dispatch(setUserProfileErrorMessage(error));

			dispatch(endFetchingUserProfile());
		} else {
			dispatch(
				fetchedUserProfile({
					userProfile: {
						id,
						avatar_url,
						username,
						full_name,
						user_profile_bio_nodes_array,
						user_profile_following_topics_array,
						user_profile_total_posts,
					},
					userTotalFollowers: user_profile_total_followers,
					userTotalFollowings: user_profile_total_followings,
					isVisitorFollowing: user_profile_is_following,
				})
			);

			dispatch(endFetchingUserProfile());
		}
	};

export const followUser = (profileOwnerID, visitorID) => async (dispatch) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/follow/${profileOwnerID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (profileOwnerID === visitorID) {
		dispatch(incrementUserTotalFollowings());
	}

	dispatch(incrementUserTotalFollowers());
};

export const unfollowUser = (profileOwnerID, visitorID) => async (dispatch) => {
	const token = fetchToken();

	await axios({
		method: "DELETE",
		url: `http://localhost:8080/unfollow/${profileOwnerID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (profileOwnerID === visitorID) {
		dispatch(decrementUserTotalFollowings());
	}

	dispatch(decrementUserTotalFollowers());
};
