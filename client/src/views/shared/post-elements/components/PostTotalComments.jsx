import * as React from "react";

import { Icon } from "../..";

import { PostActionStyle } from "../../../../styles";

import { CommentOutline } from "../../../../assets";

const PostTotalComments = ({
	totalCommentsProp,
	postTotalCommentsIconSize,
}) => {
	return (
		<PostActionStyle>
			<Icon
				iconRole="button"
				iconType="presentation"
				iconStyleObject={{
					iconSize: postTotalCommentsIconSize,
				}}
			>
				<CommentOutline />
			</Icon>

			<h5>{totalCommentsProp}</h5>
		</PostActionStyle>
	);
};

export default PostTotalComments;
