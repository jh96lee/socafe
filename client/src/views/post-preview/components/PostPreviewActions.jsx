import * as React from "react";

import { Icon } from "../../shared";

import { LikeFilled, BookmarkEmpty, CommentOutline } from "../../../assets";

import { PostPreviewActionsStyle } from "../styles/PostPreviewActionsStyle";

const PostPreviewActions = () => {
	const iconSize = "2.2rem";

	return (
		<PostPreviewActionsStyle>
			<Icon
				iconRole="button"
				iconType="presentation"
				iconOnClick={null}
				iconStyleObject={{
					iconFill: "var(--char-like)",
					iconSize,
				}}
			>
				<LikeFilled />
			</Icon>

			<Icon
				iconRole="button"
				iconType="presentation"
				iconStyleObject={{
					iconSize,
				}}
			>
				<CommentOutline />
			</Icon>

			<Icon
				iconRole="button"
				iconType="presentation"
				iconStyleObject={{
					iconSize,
				}}
			>
				<BookmarkEmpty />
			</Icon>
		</PostPreviewActionsStyle>
	);
};

export default PostPreviewActions;
