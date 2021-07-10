import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { Skeleton } from "../index";

import { likePostRequest } from "../../../utils/likes/likePostRequest";
import { unlikePostRequest } from "../../../utils/likes/unlikePostRequest";

import { PostLikesStyle } from "./PostLikesStyle";

import { HeartEmpty, HeartFill } from "../../../assets";

const PostLikes = ({
	postIDData,
	postIsLikedData,
	postTotalLikesData,
	postLikesIconSize,
	postLikesLabelFontSize,
	// REVIEW: disables any functionality from triggering
	disablePostLikesOnClick,
	// REVIEW: hides the total amount of likes (use for PostPreview)
	conditionalRenderingVariable,
}) => {
	const [isLiked, setIsLiked] = React.useState(postIsLikedData);
	const [totalLikes, setTotalLikes] = React.useState(postTotalLikesData);

	const likesLocation = useLocation();

	const { postID, postIsLiked } = useSelector((state) => state.postReducer);

	// console.log(likesLocation, postID);

	React.useEffect(() => {
		if (postID === null) {
			return;
		}

		if (postID === postIDData) {
			if (postIsLiked === true) {
				console.log("increment");
			} else if (postIsLiked === false) {
				console.log("decrement");
			}
		} else {
			return;
		}
	}, [postID]);

	// console.log(postIDData);

	return (
		<PostLikesStyle
		// onClick={disablePostLikesOnClick ? null : handlePostLikesOnClick}
		// postLikesIconSize={postLikesIconSize}
		// postLikesLabelFontSize={postLikesLabelFontSize}
		>
			{/* {isLikedVariable ? <HeartFill /> : <HeartEmpty />}

			{conditionalRenderingVariable ? (
				<p>
					{totalLikesVariable} {onPostPath && "Likes"}
				</p>
			) : (
				<Skeleton skeletonHeight="2.6rem" skeletonWidth="5rem" />
			)} */}
			<HeartEmpty />
		</PostLikesStyle>
	);
};

export default PostLikes;

// {
// 	const [isLiked, setIsLiked] = React.useState(isLikedData);
// 	const [totalLikes, setTotalLikes] = React.useState(totalLikesData);

// 	const dispatch = useDispatch();

// 	const { postID, isPostLiked, postTotalLikes } = useSelector(
// 		(state) => state.postReducer
// 	);

// 	const postLikesLocation = useLocation();
// 	// REVIEW: this is the deciding factor
// 	const isPostModal = postLikesLocation.state ? true : false;
// 	const onPostPath = postLikesLocation.pathname.split("/").includes("post");

// 	const isLikedVariable = onPostPath ? isPostModalLiked : isLiked;
// 	const totalLikesVariable = onPostPath ? postModalTotalLikes : totalLikes;

// 	const handlePostLikesOnClick = () => {
// 		if (!isPostModal && !onPostPath && postModalID) {
// 			return;
// 		} else if (onPostPath) {
// 			dispatch(likeOrUnlikePostModal());
// 		} else {
// 			setIsLiked((prevState) => !prevState);
// 		}
// 	};

// 	const afterInitialMount = React.useRef(false);

// 	React.useEffect(() => {
// 		if (afterInitialMount.current) {
// 			if (postModalID === null) {
// 				if (isLiked) {
// 					setTotalLikes((prevState) => prevState + 1);

// 					likePostRequest(postID);
// 				} else {
// 					setTotalLikes((prevState) => prevState - 1);

// 					unlikePostRequest(postID);
// 				}
// 			}
// 		}

// 		afterInitialMount.current = true;
// 	}, [isLiked]);

// 	React.useEffect(() => {
// 		if (
// 			postModalID !== null &&
// 			isPostModalLiked !== null &&
// 			postModalTotalLikes !== null &&
// 			postID === postModalID
// 		) {
// 			setIsLiked(isPostModalLiked);

// 			setTotalLikes(postModalTotalLikes);
// 		}
// 	}, [isPostModalLiked]);

// 	return (
// 		<PostLikesStyle
// 			onClick={disablePostLikesOnClick ? null : handlePostLikesOnClick}
// 			postLikesIconSize={postLikesIconSize}
// 			postLikesLabelFontSize={postLikesLabelFontSize}
// 		>
// 			{isLikedVariable ? <HeartFill /> : <HeartEmpty />}

// 			{conditionalRenderingVariable ? (
// 				<p>
// 					{totalLikesVariable} {onPostPath && "Likes"}
// 				</p>
// 			) : (
// 				<Skeleton skeletonHeight="2.6rem" skeletonWidth="5rem" />
// 			)}
// 		</PostLikesStyle>
// 	);
// };
