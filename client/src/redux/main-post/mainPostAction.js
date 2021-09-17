import axios from "axios";

import {
	likePostRequest,
	unlikePostRequest,
	bookmarkPostRequest,
	unbookmarkPostRequest,
} from "../../utils";

const startFetchingMainPost = () => ({
	type: "START_FETCHING_MAIN_POST",
});

const fetchedMainPost = (mainPostDataObject) => ({
	type: "FETCHED_MAIN_POST",
	payload: mainPostDataObject,
});

const endFetchingMainPost = () => ({
	type: "END_FETCHING_MAIN_POST",
});

export const setIsMainPostLiked = () => ({
	type: "SET_IS_MAIN_POST_LIKED",
});

const setMainPostTotalLikes = (totalLikes) => ({
	type: "SET_MAIN_POST_TOTAL_LIKES",
	payload: totalLikes,
});

export const setIsMainpostBookmarked = () => ({
	type: "SET_IS_MAIN_POST_BOOKMARKED",
});

export const resetMainPost = () => ({
	type: "RESET_MAIN_POST",
});

export const fetchMainPost = (postID, visitorID) => async (dispatch) => {
	dispatch(startFetchingMainPost());

	const { data } = await axios({
		method: "GET",
		url: `http://localhost:8080/post/${postID}/${visitorID}`,
	});

	const {
		post_id,
		post_date,
		post_owner,
		post_images,
		post_captions,
		post_topics,
		post_tagged_users,
		post_is_liked,
		post_is_bookmarked,
		post_total_likes,
		post_total_comments,
		error,
	} = data;

	if (!error) {
		dispatch(setMainPostTotalLikes(post_total_likes));

		dispatch(
			fetchedMainPost({
				mainPostID: post_id,
				isMainPostLiked: post_is_liked,
				mainPostTotalLikes: post_total_likes,
				isMainPostBookmarked: post_is_bookmarked,
				mainPost: {
					post_date,
					post_owner,
					post_images,
					post_captions,
					post_topics,
					post_tagged_users,
					post_total_comments,
				},
			})
		);

		dispatch(endFetchingMainPost());
	}
};

export const likeOrUnlikePost = (postID) => async (dispatch, getState) => {
	dispatch(setIsMainPostLiked());

	const { isMainPostLiked, mainPostTotalLikes } = getState().mainPostReducer;

	if (isMainPostLiked) {
		dispatch(setMainPostTotalLikes(mainPostTotalLikes + 1));

		likePostRequest(postID);
	} else {
		dispatch(setMainPostTotalLikes(mainPostTotalLikes - 1));

		unlikePostRequest(postID);
	}
};

export const bookmarkOrUnbookmarkPost =
	(postID) => async (dispatch, getState) => {
		dispatch(setIsMainpostBookmarked());

		const { isMainPostBookmarked } = getState().mainPostReducer;

		if (isMainPostBookmarked) {
			bookmarkPostRequest(postID);
		} else {
			unbookmarkPostRequest(postID);
		}
	};
