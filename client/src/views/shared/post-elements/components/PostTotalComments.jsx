import * as React from "react";

import { IconElement } from "../../index";

import { PostTotalNumbersStyle } from "../styles/PostTotalNumbersStyle";

import { Comment } from "../../../../assets";

const PostTotalComments = ({ postTotalComments }) => {
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

			<p>{postTotalComments} Comments</p>
		</PostTotalNumbersStyle>
	);
};

export default PostTotalComments;
