"/profile/:profilePostType/:ownerUsername/:visitorID";

import axios from "axios";

const startFetchingUserProfilePosts = () => ({
	type: "START_FETCHING_USER_PROFILE_POSTS",
});

const fetchedUserProfilePosts = (userProfilePosts) => ({
	type: "FETCHED_USER_PROFILE_POSTS",
	payload: userProfilePosts,
});

const endFetchingUserProfilePosts = () => ({
	type: "END_FETCHING_USER_PROFILE_POSTS",
});

export const fetchUserProfilePosts =
	(userProfilePostsEndpoint) => async (dispatch) => {
		dispatch(startFetchingUserProfilePosts());

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080${userProfilePostsEndpoint}`,
		});

		const { error } = data;

		if (error) {
			dispatch(endFetchingUserProfilePosts());
		} else {
			dispatch(fetchedUserProfilePosts(data));

			dispatch(endFetchingUserProfilePosts());
		}
	};
