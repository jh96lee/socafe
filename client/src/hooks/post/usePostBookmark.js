import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { bookmarkOrUnbookmarkPost } from "../../redux/main-post/mainPostAction";

import { bookmarkPostRequest } from "../../utils/post/bookmarkPostRequest";
import { unbookmarkPostRequest } from "../../utils/post/unbookmarkPostRequest";

const usePostBookmark = (initialIsBookmarked, postBookmarkPostID) => {
	const [isPostBookmarked, setIsPostBookmarked] =
		React.useState(initialIsBookmarked);

	const { mainPostID, isMainPostBookmarked } = useSelector(
		(state) => state.mainPostReducer
	);

	const dispatch = useDispatch();

	const postLikeLocation = useLocation();
	const isPostLikeOnMainPost = postLikeLocation.state ? true : false;

	const isBookmarkedState = isPostLikeOnMainPost
		? isMainPostBookmarked
		: isPostBookmarked;

	const handlePostBookmarkOnClick = () => {
		if (isPostLikeOnMainPost && mainPostID) {
			dispatch(bookmarkOrUnbookmarkPost(postBookmarkPostID));
		} else if (!isPostLikeOnMainPost && !mainPostID) {
			setIsPostBookmarked((prevState) => !prevState);
		} else {
			return;
		}
	};

	React.useEffect(() => {
		if (isMainPostBookmarked === null) {
			return;
		}

		if (mainPostID === postBookmarkPostID && !isPostLikeOnMainPost) {
			setIsPostBookmarked(isMainPostBookmarked);
		}
	}, [isMainPostBookmarked]);

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isPostBookmarked) {
				if (!mainPostID) {
					bookmarkPostRequest(postBookmarkPostID);
				}
			} else {
				if (!mainPostID) {
					unbookmarkPostRequest(postBookmarkPostID);
				}
			}
		}

		afterInitialMount.current = true;
	}, [isPostBookmarked]);

	return {
		isMainPostBookmarked,
		isBookmarkedState,
		handlePostBookmarkOnClick,
	};
};

export default usePostBookmark;
