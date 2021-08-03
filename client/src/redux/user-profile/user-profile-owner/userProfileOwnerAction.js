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
	(leaderUsername, visitorID) => async (dispatch) => {
		dispatch(startFetchingProfileOwner());

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
			dispatch(endFetchingProfileOwner());
		} else {
			dispatch(
				fetchedProfileOwner({
					profileOwner: {
						id,
						avatar_url,
						username,
						full_name,
						user_profile_bio_nodes_array,
						user_profile_following_topics_array,
						user_profile_total_posts,
					},
					profileOwnerTotalFollowers: user_profile_total_followers,
					profileOwnerTotalFollowings: user_profile_total_followings,
					isVisitorFollowingProfileOwner: user_profile_is_following,
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
