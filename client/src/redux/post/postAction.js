import axios from "axios";

import { likePostRequest } from "../../utils/likes/likePostRequest";
import { unlikePostRequest } from "../../utils/likes/unlikePostRequest";

const startFetchingPost = () => ({
	type: "START_FETCHING_POST",
});

const fetchedPost = (post) => ({
	type: "FETCHED_POST",
	payload: post,
});

const endFetchingPost = () => ({
	type: "END_FETCHING_POST",
});

const setPostID = (id) => ({
	type: "SET_POST_ID",
	payload: id,
});

const setIsPostLiked = (boolean) => ({
	type: "SET_IS_POST_LIKED",
	payload: boolean,
});

const setPostTotalLikes = (totalLikes) => ({
	type: "SET_POST_TOTAL_LIKES",
	payload: totalLikes,
});

const setPostLike = () => ({
	type: "SET_POST_LIKE",
});

const incrementPostTotalLikes = () => ({
	type: "INCREMENT_POST_TOTAL_LIKES",
});

const decrementPostTotalLikes = () => ({
	type: "DECREMENT_POST_TOTAL_LIKES",
});

export const resetPost = () => ({
	type: "RESET_POST",
});

export const fetchPost = (postID, userID) => async (dispatch) => {
	dispatch(startFetchingPost());

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
		fetchedPost({
			categories,
			contents,
			images,
			post_id,
			taggedUsers,
			totalComments,
			user,
		})
	);

	dispatch(setPostID(post_id));

	dispatch(setIsPostLiked(isLiked));

	dispatch(setPostTotalLikes(totalLikes));

	dispatch(endFetchingPost());
};

export const likeOrUnlikePost = () => async (dispatch, getState) => {
	dispatch(setPostLike());

	const { isPostLiked, postID } = getState().postModalReducer;

	if (isPostLiked) {
		dispatch(incrementPostTotalLikes());

		likePostRequest(postID);
	} else {
		dispatch(decrementPostTotalLikes());

		unlikePostRequest(postID);
	}
};
