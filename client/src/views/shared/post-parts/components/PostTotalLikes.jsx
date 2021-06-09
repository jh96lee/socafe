import * as React from "react";

import { IconElement, Skeleton } from "../../index";

import { Heart } from "../../../../assets";

import { PostTotalNumbersStyle } from "../styles/PostTotalNumbersStyle";

const PostTotalLikes = ({ postTotalLikes, conditionalRenderVariable }) => {
	return (
		<PostTotalNumbersStyle>
			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementHoverBackgroundColor: "none",
					iconColor: "#ff0000",
					iconHoverColor: "#d80000",
					iconSize: "2.2rem",
				}}
			>
				<Heart />
			</IconElement>

			{conditionalRenderVariable ? (
				<p>{postTotalLikes} Likes</p>
			) : (
				<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
			)}
		</PostTotalNumbersStyle>
	);
};

export default PostTotalLikes;
