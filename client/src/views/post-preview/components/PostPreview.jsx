import * as React from "react";

import PostUploader from "./PostUploader";
import PostImagesPreview from "./PostImagesPreview";
import PostNumbersMetaData from "./PostNumbersMetaData";
import PostCategoriesPreview from "./PostCategoriesPreview";
import PostCaptionPreview from "./PostCaptionPreview";
import { Skeleton } from "../../shared";

import {
	PostPreviewStyle,
	PostPreviewDetailsStyle,
} from "../styles/PostPreviewStyle";

const PostPreview = () => {
	return (
		<PostPreviewStyle>
			<PostImagesPreview />

			<PostPreviewDetailsStyle>
				<PostCategoriesPreview />

				<PostUploader />

				<PostNumbersMetaData />

				<PostCaptionPreview />

				<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />
				<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />
				<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />

				<Skeleton
					skeletonHeight="4.2rem"
					skeletonWidth="100%"
					skeletonBorderRadius="3rem"
				/>
			</PostPreviewDetailsStyle>
		</PostPreviewStyle>
	);
};

export default PostPreview;
