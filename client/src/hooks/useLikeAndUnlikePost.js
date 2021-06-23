import * as React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { fetchToken } from "../utils/cookie/fetchToken";

export const useLikeAndUnlikePost = (postID) => {
	const [isPostLiked, setIsPostLiked] = React.useState(null);
	const [totalPostLikes, setTotalPostLikes] = React.useState(null);
	const [isPostLikesDataLoaded, setIsPostLikesDataLoaded] =
		React.useState(false);

	const token = fetchToken();

	const { user } = useSelector((state) => state.userReducer);

	const firstRenderAfterDataFetch = React.useRef();

	const fetchPostLikesData = React.useCallback(async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/likes/${postID}?userID=${user ? user.id : 0}`,
		});

		const { isLiked, totalLikes } = data;

		setIsPostLiked(isLiked);

		setTotalPostLikes(totalLikes);

		setIsPostLikesDataLoaded(true);
	}, []);

	React.useEffect(() => {
		fetchPostLikesData();
	}, []);

	const likePost = React.useCallback(async () => {
		await axios({
			method: "POST",
			url: `http://localhost:8080/like/post/${postID}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}, []);

	const unlikePost = React.useCallback(async () => {
		await axios({
			method: "DELETE",
			url: `http://localhost:8080/unlike/post/${postID}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}, []);

	React.useEffect(() => {
		if (isPostLiked === null) {
			return;
		} else {
			// TODO: this must trigger AFTER the first render of post likes data fetch
			if (firstRenderAfterDataFetch.current === false) {
				if (isPostLiked) {
					setTotalPostLikes((prevState) => prevState + 1);

					likePost();
				} else {
					setTotalPostLikes((prevState) => prevState - 1);

					unlikePost();
				}
			}

			firstRenderAfterDataFetch.current = false;
		}
	}, [isPostLiked]);

	const handleLikeOnClick = () => {
		setIsPostLiked((prevState) => !prevState);
	};

	return {
		isPostLiked,
		totalPostLikes,
		isPostLikesDataLoaded,
		handleLikeOnClick,
	};
};
