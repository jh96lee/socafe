import * as React from "react";
import axios from "axios";

import { fetchToken } from "../utils/cookie";

export const useLikeAndUnlikePostHook = (
	initialLikeState,
	totalPostLikes,
	postID
) => {
	const [isLikedState, setIsLikedState] = React.useState(initialLikeState);
	const [totalLikesState, setTotalLikesState] = React.useState(totalPostLikes);

	const token = fetchToken();

	const initialComponentMount = React.useRef(true);

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

	const handleIsLikedOnClick = () => {
		setIsLikedState((prevState) => !prevState);
	};

	React.useEffect(() => {
		if (!initialComponentMount.current) {
			if (isLikedState) {
				setTotalLikesState((prevState) => prevState + 1);

				likePost();
			} else {
				setTotalLikesState((prevState) => prevState - 1);

				unlikePost();
			}
		}

		initialComponentMount.current = false;
	}, [isLikedState]);

	return {
		isLikedState,
		setIsLikedState,
		likePost,
		unlikePost,
		totalLikesState,
		setTotalLikesState,
		handleIsLikedOnClick,
	};
};
