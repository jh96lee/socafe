import * as React from "react";

import { Skeleton } from "../../shared";

import { HeartFill, ClockFilled, CommentFilled } from "../../../assets";

import {
	PostPreviewTotalsDataStyle,
	PostPreviewTotalsDataAndIconStyle,
} from "../styles/PostPreviewNumericDataStyle";

const PostPreviewNumericData = () => {
	const postPreviewNumericDataSkeletonWidth = "4rem";
	const postPreviewNumericDataSkeletonHeight = "2.4rem";

	return (
		<PostPreviewTotalsDataStyle>
			<PostPreviewTotalsDataAndIconStyle>
				<HeartFill />

				<Skeleton
					skeletonWidth={postPreviewNumericDataSkeletonWidth}
					skeletonHeight={postPreviewNumericDataSkeletonHeight}
				/>
			</PostPreviewTotalsDataAndIconStyle>

			<PostPreviewTotalsDataAndIconStyle>
				<CommentFilled />

				<Skeleton
					skeletonWidth={postPreviewNumericDataSkeletonWidth}
					skeletonHeight={postPreviewNumericDataSkeletonHeight}
				/>
			</PostPreviewTotalsDataAndIconStyle>

			<PostPreviewTotalsDataAndIconStyle>
				<ClockFilled />

				<Skeleton
					skeletonWidth={postPreviewNumericDataSkeletonWidth}
					skeletonHeight={postPreviewNumericDataSkeletonHeight}
				/>
			</PostPreviewTotalsDataAndIconStyle>
		</PostPreviewTotalsDataStyle>
	);
};

export default PostPreviewNumericData;
