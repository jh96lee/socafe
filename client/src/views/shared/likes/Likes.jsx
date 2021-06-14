import * as React from "react";
import styled from "styled-components";

import { IconElement } from "../index";

import { useLikeAndUnlikePostHook } from "../../../hooks/useLikeAndUnlikePostHook";

import { HeartEmpty, HeartFill } from "../../../assets";

const LikesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	color: var(--txt-1);
`;

const Likes = ({ postLikesData }) => {
	const { isLikedState, totalLikesState, handleIsLikedOnClick } =
		useLikeAndUnlikePostHook(
			postLikesData.isLiked,
			postLikesData.totalLikes,
			postLikesData.post_id
		);

	return (
		postLikesData && (
			<LikesStyle>
				<IconElement
					iconRole="button"
					onClick={handleIsLikedOnClick}
					iconElementStyleObject={{
						elementPadding: "0rem",
						elementHoverBackgroundColor: "none",
						iconColor: "#ff0000",
						iconHoverColor: "#d80000",
						iconSize: "2.1rem",
					}}
				>
					{isLikedState ? <HeartFill /> : <HeartEmpty />}
				</IconElement>

				<p>{totalLikesState} Likes</p>
			</LikesStyle>
		)
	);
};

export default Likes;
