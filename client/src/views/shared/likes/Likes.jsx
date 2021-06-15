import * as React from "react";
import styled from "styled-components";

import { IconElement, Skeleton } from "../index";

import { useLikeAndUnlikePost } from "../../../hooks/useLikeAndUnlikePost";

import { HeartEmpty, HeartFill } from "../../../assets";

const LikesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	color: var(--txt-1);
`;

const Likes = ({ postID }) => {
	const {
		isPostLiked,
		totalPostLikes,
		isPostLikesDataLoaded,
		handleLikeOnClick,
	} = useLikeAndUnlikePost(postID);

	return (
		<LikesStyle>
			<IconElement
				iconRole="button"
				onClick={handleLikeOnClick}
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementHoverBackgroundColor: "none",
					iconColor: "#ff0000",
					iconHoverColor: "#d80000",
					iconSize: "2.1rem",
				}}
			>
				{isPostLiked ? <HeartFill /> : <HeartEmpty />}
			</IconElement>

			{isPostLikesDataLoaded ? (
				<p>{totalPostLikes}</p>
			) : (
				<Skeleton skeletonWidth="3rem" skeletonHeight="2rem" />
			)}
		</LikesStyle>
	);
};

export default Likes;
