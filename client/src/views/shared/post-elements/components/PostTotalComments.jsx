import * as React from "react";

import { IconElement, Skeleton } from "../../index";

import { PostTotalNumbersStyle } from "../styles/PostTotalNumbersStyle";

import { Comment } from "../../../../assets";

const PostTotalComments = ({
	postTotalComments,
	conditionalPostTotalCommentsRenderingVariable,
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
					iconSize: "2.1rem",
				}}
			>
				<Comment />
			</IconElement>

			{conditionalPostTotalCommentsRenderingVariable ? (
				<p>{postTotalComments} Comments</p>
			) : (
				<Skeleton skeletonHeight="2.6rem" skeletonWidth="5rem" />
			)}
		</PostTotalNumbersStyle>
	);
};

export default PostTotalComments;
