import * as React from "react";

import { IconElement } from "../../../shared";

import { PostLikeStyle } from "../styles/PostLikeStyle";

import { LikeOutline, LikeFilled } from "../../../../assets";

import { usePostLike } from "../../../../hooks";

import styled from "styled-components";

const PostLikeIconWrapperStyle = styled.div`
	border-radius: 50%;
`;

const PostLike = ({
	postIDProp,
	isLikedProp,
	totalLikesProp,
	postLikeStyleObject,
}) => {
	const { isLikedState, totalLikesState, handlePostLikeOnClick } = usePostLike(
		isLikedProp,
		totalLikesProp,
		postIDProp
	);

	return (
		<PostLikeStyle {...postLikeStyleObject}>
			<PostLikeIconWrapperStyle onClick={handlePostLikeOnClick}>
				{isLikedState ? <LikeFilled /> : <LikeOutline />}
			</PostLikeIconWrapperStyle>

			<h5>{totalLikesState}</h5>
		</PostLikeStyle>
	);
};

export default PostLike;
