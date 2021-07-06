import * as React from "react";

import { IconElement, Skeleton } from "../../index";

import { PostTotalNumbersStyle } from "../styles/PostTotalNumbersStyle";

import { Comment } from "../../../../assets";

const PostTotalComments = ({
	postTotalComments,
	conditionalRenderingVariable,
}) => {
	return (
		<PostTotalNumbersStyle>
			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementBackgroundColor: "none",
					elementHoverBackgroundColor: "none",
					iconColor: "var(--icon-default-color)",
					iconHoverColor: "var(--icon-default-color)",
					iconSize: "2.5rem",
				}}
			>
				<Comment />
			</IconElement>

			{conditionalRenderingVariable ? (
				<p>{postTotalComments} Comments</p>
			) : (
				<Skeleton skeletonHeight="2.6rem" skeletonWidth="5rem" />
			)}
		</PostTotalNumbersStyle>
	);
};

export default PostTotalComments;
