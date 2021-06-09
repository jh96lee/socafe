import * as React from "react";

import { IconElement, Skeleton } from "../../index";

import { PostTotalNumbersStyle } from "../styles/PostTotalNumbersStyle";

import { Comment } from "../../../../assets";

const PostTotalComments = ({
	postTotalComments,
	conditionalRenderVariable,
}) => {
	return (
		<PostTotalNumbersStyle>
			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementHoverBackgroundColor: "none",
					iconColor: "var(--icon-2)",
					iconHoverColor: "#var(--icon-2)",
					iconSize: "2.2rem",
				}}
			>
				<Comment />
			</IconElement>

			{conditionalRenderVariable ? (
				<p>{postTotalComments} Comments</p>
			) : (
				<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
			)}
		</PostTotalNumbersStyle>
	);
};

export default PostTotalComments;
