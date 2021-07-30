import React from "react";

import { Skeleton } from "../../shared";

import { PostPreviewCommentsInputStyle } from "../styles/PostPreviewCommentsInputStyle";

const PostPreviewCommentsInput = () => {
	return (
		<PostPreviewCommentsInputStyle>
			<Skeleton skeletonWidth="100%" skeletonHeight="5rem" />
		</PostPreviewCommentsInputStyle>
	);
};

export default PostPreviewCommentsInput;
