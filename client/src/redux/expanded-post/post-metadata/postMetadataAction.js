import axios from "axios";

import {
	likePostRequest,
	unlikePostRequest,
	bookmarkPostRequest,
	unbookmarkPostRequest,
} from "../../../utils";

const startFetchingPost = () => ({
	type: "START_FETCHING_POST",
});

const fetchedPost = (mainPostDataObject) => ({
	type: "FETCHED_POST",
	payload: mainPostDataObject,
});

const endFetchingPost = () => ({
	type: "END_FETCHING_POST",
});

export const setIsPostLiked = () => ({
	type: "SET_IS_POST_LIKED",
});

const setPostTotalLikes = (totalLikes) => ({
	type: "SET_POST_TOTAL_LIKES",
	payload: totalLikes,
});

export const setIsPostBookmarked = () => ({
	type: "SET_IS_POST_BOOKMARKED",
});

export const resetPost = () => ({
	type: "RESET_POST",
});

export const fetchMainPost = (postID, visitorID) => async (dispatch) => {
	dispatch(startFetchingPost());

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
		dispatch(setPostTotalLikes(post_total_likes));

		dispatch(
			fetchedPost({
				postID: post_id,
				isPostLiked: post_is_liked,
				postTotalLikes: post_total_likes,
				isPostBookmarked: post_is_bookmarked,
				postMetadata: {
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

		dispatch(endFetchingPost());
	}
};

export const likeOrUnlikePost = (postID) => async (dispatch, getState) => {
	dispatch(setIsPostLiked());

	const { isPostLiked, postTotalLikes } = getState().mainPostReducer;

	if (isPostLiked) {
		dispatch(setPostTotalLikes(postTotalLikes + 1));

		likePostRequest(postID);
	} else {
		dispatch(setPostTotalLikes(postTotalLikes - 1));

		unlikePostRequest(postID);
	}
};

export const bookmarkOrUnbookmarkPost =
	(postID) => async (dispatch, getState) => {
		dispatch(setIsPostBookmarked());

		const { isPostBookmarked } = getState().mainPostReducer;

		if (isPostBookmarked) {
			bookmarkPostRequest(postID);
		} else {
			unbookmarkPostRequest(postID);
		}
	};
