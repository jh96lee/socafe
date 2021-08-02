import * as React from "react";

import { IconElement } from "../../../shared";

import { PostLikeStyle } from "../styles/PostLikeStyle";

import { HeartEmpty, HeartFill } from "../../../../assets";

import { usePostLike } from "../../../../hooks";

const PostLike = ({
	likeIconSize = "2.2rem",
	isLikeIconBackgroundTransparent = false,
	postIDProp,
	isLikedProp,
	totalLikesProp,
}) => {
	const { isLikedState, totalLikesState, handlePostLikeOnClick } = usePostLike(
		isLikedProp,
		totalLikesProp,
		postIDProp
	);

	return (
		<PostLikeStyle>
			<IconElement
				iconRole="button"
				onClick={handlePostLikeOnClick}
				iconElementStyleObject={{
					elementBackgroundColor: isLikeIconBackgroundTransparent
						? "transparent"
						: "var(--likes-bg-color)",
					elementHoverBackgroundColor: "var(--likes-hover-bg-color)",
					iconColor: "var(--likes-icon-color)",
					iconSize: likeIconSize,
				}}
			>
				{isLikedState ? <HeartFill /> : <HeartEmpty />}
			</IconElement>

			<h5>{totalLikesState}</h5>
		</PostLikeStyle>
	);
};

export default PostLike;
