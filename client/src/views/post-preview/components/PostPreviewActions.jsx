import * as React from "react";

import { IconElement } from "../../shared";

import {
	HeartFill,
	BookmarkEmpty,
	CommentOutline,
	CommentFilled,
} from "../../../assets";

import { PostActionsStyle } from "../styles/PostPreviewActionsStyle";

const PostPreviewActions = ({
	isPostCommentsOpen,
	handleOpenAndClosePostCommentsOnClick,
}) => {
	return (
		<PostActionsStyle>
			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					elementBackgroundColor: "var(--likes-bg-color)",
					elementHoverBackgroundColor: "var(--likes-hover-bg-color)",
					iconColor: "var(--likes-icon-color)",
					iconSize: "2.3rem",
				}}
			>
				<HeartFill />
			</IconElement>

			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					iconSize: "2.3rem",
				}}
			>
				<BookmarkEmpty />
			</IconElement>

			<IconElement
				onClick={handleOpenAndClosePostCommentsOnClick}
				iconRole="button"
				iconID="post-preview-actions__comment-outline"
				iconElementStyleObject={{
					iconSize: "2.3rem",
				}}
			>
				{isPostCommentsOpen ? <CommentFilled /> : <CommentOutline />}
			</IconElement>
		</PostActionsStyle>
	);
};

export default PostPreviewActions;