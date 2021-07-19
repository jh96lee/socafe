import * as React from "react";

import PostPreviewMetadata from "./PostPreviewMetadata";
import PostPreviewComments from "./PostPreviewComments";

import { usePostCommentsDisplay } from "../../../hooks";

import { PostPreviewStyle } from "../styles/PostPreviewStyle";

const PostPreview = () => {
	const {
		isPostCommentsOpen,
		handleOpenAndClosePostCommentsOnClick,
		handleClosePostCommentsOnClick,
	} = usePostCommentsDisplay();

	return (
		<PostPreviewStyle>
			<PostPreviewMetadata
				isPostCommentsOpen={isPostCommentsOpen}
				handleOpenAndClosePostCommentsOnClick={
					handleOpenAndClosePostCommentsOnClick
				}
			/>

			<PostPreviewComments
				isPostCommentsOpen={isPostCommentsOpen}
				handleClosePostCommentsOnClick={handleClosePostCommentsOnClick}
			/>
		</PostPreviewStyle>
	);
};

export default PostPreview;
