import axios from "axios";

import { likePostRequest } from "../../utils/post/likePostRequest";
import { unlikePostRequest } from "../../utils/post/unlikePostRequest";
import { bookmarkPostRequest } from "../../utils/post/bookmarkPostRequest";
import { unbookmarkPostRequest } from "../../utils/post/unbookmarkPostRequest";

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

	try {
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

		if (error) {
			dispatch(endFetchingMainPost());
		} else {
			dispatch(setMainPostTotalLikes(post_total_likes));

			dispatch(
				fetchedMainPost({
					mainPostID: post_id,
					mainPostDate: post_date,
					mainPostOwner: post_owner,
					mainPostImages: post_images,
					mainPostCaptions: post_captions,
					mainPostTopics: post_topics,
					mainPostTaggedUsers: post_tagged_users,
					isMainPostLiked: post_is_liked,
					isMainPostBookmarked: post_is_bookmarked,
					mainPostTotalLikes: post_total_likes,
					mainPostTotalComments: post_total_comments,
				})
			);

			dispatch(endFetchingMainPost());
		}
	} catch (error) {
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
