import * as React from "react";

import { IconElement, Skeleton } from "../../index";

import { PostTotalNumbersStyle } from "../styles/PostTotalNumbersStyle";

import { HeartFill, HeartEmpty } from "../../../../assets";

const PostTotalLikes = ({
	isLiked,
	totalLikes,
	onClick,
	conditionalPostTotalLikesRenderingVariable,
}) => {
	return (
		<PostTotalNumbersStyle>
			<IconElement
				iconRole="button"
				onClick={onClick}
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementHoverBackgroundColor: "none",
					iconColor: "#ff0000",
					iconHoverColor: "#d80000",
					iconSize: "2.1rem",
				}}
			>
				{isLiked ? <HeartFill /> : <HeartEmpty />}
			</IconElement>

			{conditionalPostTotalLikesRenderingVariable ? (
				<p>{totalLikes} Likes</p>
			) : (
				<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
			)}
		</PostTotalNumbersStyle>
	);
};

export default PostTotalLikes;
