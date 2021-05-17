import * as React from "react";

import { SkeletonStyle } from "./SkeletonStyle";

const Skeleton = ({ skeletonWidth, skeletonHeight, skeletonBorderRadius }) => {
	return (
		<SkeletonStyle
			skeletonWidth={skeletonWidth}
			skeletonHeight={skeletonHeight}
			skeletonBorderRadius={skeletonBorderRadius}
		/>
	);
};

export default Skeleton;
