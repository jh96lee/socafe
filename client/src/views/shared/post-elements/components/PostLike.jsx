import * as React from "react";

import { Icon } from "../../../shared";

import { PostLikeStyle } from "../styles/PostLikeStyle";

import { LikeOutline, LikeFilled } from "../../../../assets";

import { usePostLike } from "../../../../hooks";

const PostLike = ({
	postIDProp,
	isLikedProp,
	totalLikesProp,
	postLikeIconSize,
	postLikeStyleObject,
}) => {
	const { isLikedState, totalLikesState, handlePostLikeOnClick } = usePostLike(
		isLikedProp,
		totalLikesProp,
		postIDProp
	);

	return (
		<PostLikeStyle {...postLikeStyleObject}>
			<Icon
				iconRole="button"
				iconType="presentation"
				iconOnClick={handlePostLikeOnClick}
				iconStyleObject={{
					iconFill: "var(--char-like)",
					iconSize: postLikeIconSize,
				}}
			>
				{isLikedState ? <LikeFilled /> : <LikeOutline />}
			</Icon>

			<h5>{totalLikesState}</h5>
		</PostLikeStyle>
	);
};

export default PostLike;
