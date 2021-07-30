import * as React from "react";

import { Skeleton } from "../../shared";

import { PostPreviewCommentsStyle } from "../styles/PostPreviewCommentsStyle";

const PostPreviewComments = () => {
	return (
		<PostPreviewCommentsStyle>
			<Skeleton skeletonWidth="100%" skeletonHeight="3.8rem" />

			<Skeleton skeletonWidth="100%" skeletonHeight="3.8rem" />

			<Skeleton skeletonWidth="100%" skeletonHeight="3.8rem" />
		</PostPreviewCommentsStyle>
	);
};

export default PostPreviewComments;
