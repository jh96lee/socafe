import * as React from "react";

import PostPreviewMetadata from "./PostPreviewMetadata";
import PostPreviewComments from "./PostPreviewComments";

import { PostPreviewStyle } from "../styles/PostPreviewStyle";

const PostPreview = () => {
	const [isPostCommentsOpen, setIsPostCommentsOpen] = React.useState(true);

	const handleOpenAndClosePostCommentsOnClick = () => {
		setIsPostCommentsOpen((prevState) => !prevState);
	};

	const handleClosePostCommentsOnClick = () => {
		setIsPostCommentsOpen(false);
	};

	return (
		<PostPreviewStyle>
			<PostPreviewMetadata
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
