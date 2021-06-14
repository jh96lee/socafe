import * as React from "react";

import { IconElement } from "../../shared";

import { useLikeAndUnlikePostHook } from "../../../hooks/useLikeAndUnlikePostHook";

import { HomePostTotalDataStyle } from "../styles/HomePostTotalDataStyle";

import { HeartFill, HeartEmpty } from "../../../assets";

const HomePostLike = ({ postID, isLiked, totalLikes }) => {
	const { isLikedState, totalLikesState, handleIsLikedOnClick } =
		useLikeAndUnlikePostHook(isLiked, totalLikes, postID);

	return (
		<HomePostTotalDataStyle>
			<IconElement
				iconRole="button"
				onClick={handleIsLikedOnClick}
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementHoverBackgroundColor: "none",
					iconColor: "#ff0000",
					iconHoverColor: "#d80000",
					iconSize: "2.2rem",
				}}
			>
				{isLikedState ? <HeartFill /> : <HeartEmpty />}
			</IconElement>

			<p>{totalLikesState}</p>
		</HomePostTotalDataStyle>
	);
};

export default HomePostLike;
