import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { IconElement, Skeleton } from "../index";

import { useLikeAndUnlikePost } from "../../../hooks/useLikeAndUnlikePost";

import { likeOrUnlikePostModal } from "../../../redux/post-modal/postModalAction";

import { fetchToken } from "../../../utils/cookie/fetchToken";

import { LikesStyle } from "./LikesStyle";

import { HeartEmpty, HeartFill } from "../../../assets";

// FIX: conditional rendering
const Likes = ({
	postID,
	isLikedData,
	totalLikesData,
	iconSize = "2.1rem",
	numberFontSize,
	disableButton,
	displayLabel = false,
}) => {
	const likesLocation = useLocation();
	// REVIEW: this is the deciding factor
	const isPostModal = likesLocation.state ? true : false;
	const onPostPath = likesLocation.pathname.split("/").includes("post");

	// REVIEW: these are the states
	const { postModalID, isPostModalLiked, postModalTotalLikes } = useSelector(
		(state) => state.postModalReducer
	);
	const [isLiked, setIsLiked] = React.useState(isLikedData);
	const [totalLikes, setTotalLikes] = React.useState(totalLikesData);

	// REVIEW: data to be rendered
	const isLikedVariable = onPostPath ? isPostModalLiked : isLiked;
	const totalLikesVariable = onPostPath ? postModalTotalLikes : totalLikes;

	const { user } = useSelector((state) => state.userReducer);

	const token = fetchToken();

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

	const dispatch = useDispatch();

	// FIX: later check the path if it's from Post component
	const handleLikeOnClick = () => {
		// REVIEW: prevents any functionality from triggering when both HomePost and Post components are rendered but then
		// REVIEW: someone manually changed the position of Post component's position and clicked on HomePost's Heart icon
		if (!isPostModal && postModalID && !onPostPath) {
			return;
		} else {
			console.log("FIRE");
			dispatch(likeOrUnlikePostModal());
		}
	};

	const afterInitialMount = React.useRef(false);

	return (
		<LikesStyle numberFontSize={numberFontSize}>
			<IconElement
				iconRole="button"
				onClick={user ? handleLikeOnClick : null}
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementHoverBackgroundColor: "none",
					elementCursor: user ? "pointer" : "not-allowed",
					iconColor: "#ff0000",
					iconHoverColor: "#d80000",
					iconSize,
				}}
			>
				{isLikedVariable ? <HeartFill /> : <HeartEmpty />}
			</IconElement>

			<p>
				{totalLikesVariable} {displayLabel && "Likes"}
			</p>
		</LikesStyle>
	);
};

export default Likes;
