import axios from "axios";

import { likePostRequest } from "../../utils/likes/likePostRequest";
import { unlikePostRequest } from "../../utils/likes/unlikePostRequest";

const startFetchingPostModal = () => ({
	type: "START_FETCHING_POST_MODAL",
});

const fetchedPostModal = (post) => ({
	type: "FETCHED_POST_MODAL",
	payload: post,
});

const endFetchingPostModal = () => ({
	type: "END_FETCHING_POST_MODAL",
});

const setPostModalID = (id) => ({
	type: "SET_POST_MODAL_ID",
	payload: id,
});

const setIsPostModalLiked = (boolean) => ({
	type: "SET_IS_POST_MODAL_LIKED",
	payload: boolean,
});

const setPostModalTotalLikes = (totalLikes) => ({
	type: "SET_POST_MODAL_TOTAL_LIKES",
	payload: totalLikes,
});

const setPostModalLike = () => ({
	type: "SET_POST_MODAL_LIKE",
});

const incrementPostModalTotalLikes = () => ({
	type: "INCREMENT_POST_MODAL_TOTAL_LIKES",
});

const decrementPostModalTotalLikes = () => ({
	type: "DECREMENT_POST_MODAL_TOTAL_LIKES",
});

export const resetPostModal = () => ({
	type: "RESET_POST_MODAL",
});

export const fetchPostModal = (postID, userID) => async (dispatch) => {
	dispatch(startFetchingPostModal());

	const { data } = await axios({
		method: "GET",
		url: `http://localhost:8080/post/${postID}?userID=${userID}`,
	});

	const {
		categories,
		contents,
		images,
		isLiked,
		post_id,
		taggedUsers,
		totalComments,
		totalLikes,
		user,
	} = data;

	dispatch(
		fetchedPostModal({
			categories,
			contents,
			images,
			post_id,
			taggedUsers,
			totalComments,
			user,
		})
	);

	dispatch(setPostModalID(post_id));

	dispatch(setIsPostModalLiked(isLiked));

	dispatch(setPostModalTotalLikes(totalLikes));

	dispatch(endFetchingPostModal());
};

export const likeOrUnlikePostModal = () => async (dispatch, getState) => {
	dispatch(setPostModalLike());

	const { isPostModalLiked, postModalID } = getState().postModalReducer;

	if (isPostModalLiked) {
		dispatch(incrementPostModalTotalLikes());

		likePostRequest(postModalID);
	} else {
		dispatch(decrementPostModalTotalLikes());

		unlikePostRequest(postModalID);
	}
};
