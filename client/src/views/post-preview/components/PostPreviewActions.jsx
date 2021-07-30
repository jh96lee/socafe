import * as React from "react";

import { IconElement } from "../../shared";

import { HeartFill, BookmarkEmpty, CommentOutline } from "../../../assets";

import { PostPreviewActionsStyle } from "../styles/PostPreviewActionsStyle";

const PostPreviewActions = () => {
	const iconSize = "2rem";

	return (
		<PostPreviewActionsStyle>
			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					elementBackgroundColor: "var(--likes-bg-color)",
					elementHoverBackgroundColor: "var(--likes-hover-bg-color)",
					iconColor: "var(--likes-icon-color)",
					iconSize,
				}}
			>
				<HeartFill />
			</IconElement>

			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					iconSize,
				}}
			>
				<CommentOutline />
			</IconElement>

			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					iconSize,
				}}
			>
				<BookmarkEmpty />
			</IconElement>
		</PostPreviewActionsStyle>
	);
};

export default PostPreviewActions;
