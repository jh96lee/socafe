import * as React from "react";

import { SkeletonStyle } from "./SkeletonStyle";

const Skeleton = ({
	skeletonWidth,
	skeletonHeight,
	skeletonBorderRadius,
	skeletonMargin,
}) => {
	return (
		<SkeletonStyle
			skeletonWidth={skeletonWidth}
			skeletonHeight={skeletonHeight}
			skeletonBorderRadius={skeletonBorderRadius}
			skeletonMargin={skeletonMargin}
		/>
	);
};

export default Skeleton;
