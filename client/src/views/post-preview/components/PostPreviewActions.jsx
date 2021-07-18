import * as React from "react";
import styled from "styled-components";

import { IconElement } from "../../shared";

import { HeartFill, BookmarkEmpty, CommentOutline } from "../../../assets";

import {
	PostActionsStyle,
	PostPreviewLikeStyle,
} from "../styles/PostPreviewActionsStyle";

const PostPreviewActions = ({ handleOpenAndClosePostCommentsOnClick }) => {
	return (
		<PostActionsStyle>
			<PostPreviewLikeStyle>
				<HeartFill />

				<h6>Liked</h6>
			</PostPreviewLikeStyle>

			<IconElement iconRole="button">
				<BookmarkEmpty />
			</IconElement>

			<IconElement
				onClick={handleOpenAndClosePostCommentsOnClick}
				iconRole="button"
				iconID="post-preview-actions__comment-outline"
			>
				<CommentOutline />
			</IconElement>
		</PostActionsStyle>
	);
};

export default PostPreviewActions;
