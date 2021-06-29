import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { likeOrUnlikePostModal } from "../../../redux/post-modal/postModalAction";

import { likePostRequest } from "../../../utils/likes/likePostRequest";
import { unlikePostRequest } from "../../../utils/likes/unlikePostRequest";

import { PostLikesStyle } from "./PostLikesStyle";

import { HeartEmpty, HeartFill } from "../../../assets";

const PostLikes = ({
	postID,
	isLikedData,
	totalLikesData,
	postLikesIconSize,
	postLikesLabelFontSize,
	disablePostLikes,
}) => {
	const [isLiked, setIsLiked] = React.useState(isLikedData);
	const [totalLikes, setTotalLikes] = React.useState(totalLikesData);

	const dispatch = useDispatch();

	const { postModalID, isPostModalLiked, postModalTotalLikes } = useSelector(
		(state) => state.postModalReducer
	);

	const postLikesLocation = useLocation();
	// REVIEW: this is the deciding factor
	const isPostModal = postLikesLocation.state ? true : false;
	const onPostPath = postLikesLocation.pathname.split("/").includes("post");

	const isLikedVariable = onPostPath ? isPostModalLiked : isLiked;
	const totalLikesVariable = onPostPath ? postModalTotalLikes : totalLikes;

	const handlePostLikesOnClick = () => {
		if (!isPostModal && !onPostPath && postModalID) {
			return;
		} else if (onPostPath) {
			dispatch(likeOrUnlikePostModal());
		} else {
			setIsLiked((prevState) => !prevState);
		}
	};

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (postModalID === null) {
				if (isLiked) {
					setTotalLikes((prevState) => prevState + 1);

					likePostRequest(postID);
				} else {
					setTotalLikes((prevState) => prevState - 1);

					unlikePostRequest(postID);
				}
			}
		}

		afterInitialMount.current = true;
	}, [isLiked]);

	React.useEffect(() => {
		if (
			postModalID !== null &&
			isPostModalLiked !== null &&
			postModalTotalLikes !== null &&
			postID === postModalID
		) {
			setIsLiked(isPostModalLiked);

			setTotalLikes(postModalTotalLikes);
		}
	}, [isPostModalLiked]);

	return (
		<PostLikesStyle
			onClick={handlePostLikesOnClick}
			postLikesIconSize={postLikesIconSize}
			postLikesLabelFontSize={postLikesLabelFontSize}
			disablePostLikes={disablePostLikes || false}
		>
			{isLikedVariable ? <HeartFill /> : <HeartEmpty />}

			<p>
				{totalLikesVariable} {onPostPath && "Likes"}
			</p>
		</PostLikesStyle>
	);
};

export default PostLikes;
