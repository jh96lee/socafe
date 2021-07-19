import * as React from "react";

import { Skeleton } from "../../shared";

import { HeartFill, ClockFilled, CommentFilled } from "../../../assets";

import {
	PostPreviewNumericDataStyle,
	PostPreviewNumericDataAndIconStyle,
} from "../styles/PostPreviewNumericDataStyle";

const PostPreviewNumericData = () => {
	const postPreviewNumericDataSkeletonWidth = "4rem";
	const postPreviewNumericDataSkeletonHeight = "2.4rem";

	return (
		<PostPreviewNumericDataStyle>
			<PostPreviewNumericDataAndIconStyle>
				<HeartFill />

				<Skeleton
					skeletonWidth={postPreviewNumericDataSkeletonWidth}
					skeletonHeight={postPreviewNumericDataSkeletonHeight}
				/>
			</PostPreviewNumericDataAndIconStyle>

			<PostPreviewNumericDataAndIconStyle>
				<CommentFilled />

				<Skeleton
					skeletonWidth={postPreviewNumericDataSkeletonWidth}
					skeletonHeight={postPreviewNumericDataSkeletonHeight}
				/>
			</PostPreviewNumericDataAndIconStyle>

			<PostPreviewNumericDataAndIconStyle>
				<ClockFilled />

				<Skeleton
					skeletonWidth={postPreviewNumericDataSkeletonWidth}
					skeletonHeight={postPreviewNumericDataSkeletonHeight}
				/>
			</PostPreviewNumericDataAndIconStyle>
		</PostPreviewNumericDataStyle>
	);
};

export default PostPreviewNumericData;
