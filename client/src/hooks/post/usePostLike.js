import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { likeOrUnlikePost } from "../../redux/main-post/mainPostAction";

import { likePostRequest } from "../../utils/post/likePostRequest";
import { unlikePostRequest } from "../../utils/post/unlikePostRequest";

const usePostLike = (initialIsLiked, initialTotalLikes, postLikePostID) => {
	const [isPostLiked, setIsPostLiked] = React.useState(initialIsLiked);
	const [postTotalLikes, setPostTotalLikes] = React.useState(initialTotalLikes);

	const { mainPostID, isMainPostLiked, mainPostTotalLikes } = useSelector(
		(state) => state.mainPostReducer
	);

	const dispatch = useDispatch();

	const postLikeLocation = useLocation();
	const isPostLikeOnMainPost = postLikeLocation.state ? true : false;

	const isLikedState = isPostLikeOnMainPost ? isMainPostLiked : isPostLiked;
	const totalLikesState = isPostLikeOnMainPost
		? mainPostTotalLikes
		: postTotalLikes;

	const handlePostLikeOnClick = () => {
		if (mainPostID) {
			dispatch(likeOrUnlikePost(postLikePostID));
		} else if (!isPostLikeOnMainPost && !mainPostID) {
			setIsPostLiked((prevState) => !prevState);
		} else {
			return;
		}
	};

	React.useEffect(() => {
		if (isMainPostLiked === null) {
			return;
		}

		if (mainPostID === postLikePostID && !isPostLikeOnMainPost) {
			setIsPostLiked(isMainPostLiked);
		}
	}, [isMainPostLiked]);

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isPostLiked) {
				setPostTotalLikes((prevState) => prevState + 1);

				if (!mainPostID) {
					likePostRequest(postLikePostID);
				}
			} else {
				setPostTotalLikes((prevState) => prevState - 1);

				if (!mainPostID) {
					unlikePostRequest(postLikePostID);
				}
			}
		}

		afterInitialMount.current = true;
	}, [isPostLiked]);

	return {
		isPostLiked,
		postTotalLikes,
		isMainPostLiked,
		mainPostTotalLikes,
		isLikedState,
		totalLikesState,
		handlePostLikeOnClick,
	};
};

export default usePostLike;
