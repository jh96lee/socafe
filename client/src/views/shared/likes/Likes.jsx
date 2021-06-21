import * as React from "react";
import { useSelector } from "react-redux";

import { IconElement, Skeleton } from "../index";

import { useLikeAndUnlikePost } from "../../../hooks/useLikeAndUnlikePost";

import { HeartEmpty, HeartFill } from "../../../assets";

import { LikesStyle } from "./LikesStyle";

const Likes = ({
	postID,
	iconSize = "2.1rem",
	numberFontSize,
	displayLabel = false,
}) => {
	const {
		isPostLiked,
		totalPostLikes,
		isPostLikesDataLoaded,
		handleLikeOnClick,
	} = useLikeAndUnlikePost(postID);

	const { user } = useSelector((state) => state.userReducer);

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
				{isPostLiked ? <HeartFill /> : <HeartEmpty />}
			</IconElement>

			{isPostLikesDataLoaded ? (
				<p>
					{totalPostLikes} {displayLabel && "Likes"}
				</p>
			) : (
				<Skeleton skeletonWidth="3rem" skeletonHeight="2rem" />
			)}
		</LikesStyle>
	);
};

export default Likes;
