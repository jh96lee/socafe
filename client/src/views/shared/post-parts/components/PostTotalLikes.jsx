import * as React from "react";

import { IconElement, Skeleton } from "../../index";

import { useLikeAndUnlikePostHook } from "../../../../hooks/useLikeAndUnlikePostHook";

import { PostTotalNumbersStyle } from "../styles/PostTotalNumbersStyle";

import { HeartFill, HeartEmpty } from "../../../../assets";

const PostTotalLikes = ({
	postID,
	isLiked,
	totalLikes,
	conditionalPostTotalLikesRenderingVariable,
}) => {
	const { isLikedState, totalLikesState, handleIsLikedOnClick } =
		useLikeAndUnlikePostHook(isLiked, totalLikes, postID);

	console.log("Post Likes Section Mounted");

	return (
		<PostTotalNumbersStyle>
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

			{conditionalPostTotalLikesRenderingVariable ? (
				<p>{totalLikesState} Likes</p>
			) : (
				<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
			)}
		</PostTotalNumbersStyle>
	);
};

export default PostTotalLikes;
