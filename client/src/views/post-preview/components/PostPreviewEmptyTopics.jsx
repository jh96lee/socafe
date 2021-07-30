import React from "react";

import { Skeleton } from "../../shared";

import { PostPreviewEmptyTopicsStyle } from "../styles/PostPreviewEmptyTopicsStyle";

const PostPreviewEmptyTopics = () => {
	return (
		<PostPreviewEmptyTopicsStyle>
			<Skeleton skeletonWidth="5rem" skeletonHeight="3.2rem" />

			<Skeleton skeletonWidth="5rem" skeletonHeight="3.2rem" />

			<Skeleton skeletonWidth="5rem" skeletonHeight="3.2rem" />
		</PostPreviewEmptyTopicsStyle>
	);
};

export default PostPreviewEmptyTopics;
