import axios from "axios";

import { fetchToken } from "../../../utils/cookie/fetchToken";

const startFetchingProfileOwner = () => ({
	type: "START_FETCHING_PROFILE_OWNER",
});

const fetchedProfileOwner = (userProfile) => ({
	type: "FETCHED_PROFILE_OWNER",
	payload: userProfile,
});

const endFetchingProfileOwner = () => ({
	type: "END_FETCHING_PROFILE_OWNER",
});

const setProfileOwnerErrorMessage = (errorMessage) => ({
	type: "SET_PROFILE_OWNER_ERROR_MESSAGE",
	payload: errorMessage,
});

export const setIsVisitorFollowingProfileOwner = () => ({
	type: "SET_IS_VISITOR_FOLLOWING_PROFILE_OWNER",
});

export const incrementProfileOwnerTotalFollowers = () => ({
	type: "INCREMENT_PROFILE_OWNER_TOTAL_FOLLOWERS",
});

export const decrementProfileOwnerTotalFollowers = () => ({
	type: "DECREMENT_PROFILE_OWNER_TOTAL_FOLLOWERS",
});

export const incrementProfileOwnerTotalFollowings = () => ({
	type: "INCREMENT_PROFILE_OWNER_TOTAL_FOLLOWINGS",
});

export const decrementProfileOwnerTotalFollowings = () => ({
	type: "DECREMENT_PROFILE_OWNER_TOTAL_FOLLOWINGS",
});

export const fetchProfileOwner =
	(ownerUsername, visitorID) => async (dispatch) => {
		dispatch(startFetchingProfileOwner());

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/profile/user/${ownerUsername}/${visitorID}`,
		});

		const {
			id,
			username,
			full_name,
			avatar_url,
			profile_bio_nodes_array,
			profile_following_topics_array,
			profile_is_following,
			profile_total_followers,
			profile_total_followings,
			profile_total_posts,
			error,
		} = data;

		if (error) {
			dispatch(setProfileOwnerErrorMessage(error));

			dispatch(endFetchingProfileOwner());
		} else {
			dispatch(
				fetchedProfileOwner({
					profileOwner: {
						id,
						avatar_url,
						username,
						full_name,
						profile_bio_nodes_array,
						profile_following_topics_array,
						profile_total_posts,
					},
					profileOwnerTotalFollowers: profile_total_followers,
					profileOwnerTotalFollowings: profile_total_followings,
					isVisitorFollowingProfileOwner: profile_is_following,
				})
			);

			dispatch(endFetchingProfileOwner());
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
		dispatch(incrementProfileOwnerTotalFollowings());
	}

	dispatch(incrementProfileOwnerTotalFollowers());
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
		dispatch(decrementProfileOwnerTotalFollowings());
	}

	dispatch(decrementProfileOwnerTotalFollowers());
};
