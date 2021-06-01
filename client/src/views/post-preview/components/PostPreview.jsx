import * as React from "react";
import { useSelector } from "react-redux";

import {
	PostImages,
	PostSelectedCategories,
	PostUser,
	PostNumericMetadata,
	PostContents,
	PostTaggedUsers,
} from "../../shared/post-data";
import { Skeleton } from "../../shared";

import { PostStyle, PostMetadataStyle } from "../../../styles";

const PostPreview = () => {
	const {
		uploadedPostImagesArray,
		selectedPostCategoriesArray,
		taggedPostUsersArray,
		postCaptionNodesArray,
	} = useSelector((state) => state.addPostReducer);
	const { user } = useSelector((state) => state.userReducer);

	return (
		<PostStyle>
			<PostImages
				postImagesArray={uploadedPostImagesArray}
				conditionalPostImagesRenderingVariable={
					uploadedPostImagesArray.length > 0
				}
			/>

			<PostMetadataStyle>
				<PostSelectedCategories
					selectedPostCategoriesArray={selectedPostCategoriesArray}
					conditionalPostSelectedCategoriesVariable={
						selectedPostCategoriesArray.length > 0
					}
				/>

				<PostUser postUser={user} conditionalPostUserVariable={user} />

				<PostNumericMetadata conditionalPostNumericMetadataVariable={null} />

				<PostContents
					postContentsArray={postCaptionNodesArray}
					conditionalPostContentsVariable={postCaptionNodesArray.length > 0}
				/>

				<PostTaggedUsers
					postTaggedUsersArray={taggedPostUsersArray}
					conditionalPostTaggedUsersVariable={taggedPostUsersArray.length > 0}
				/>

				<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />
				<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />
				<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />

				<Skeleton
					skeletonHeight="4.2rem"
					skeletonWidth="100%"
					skeletonBorderRadius="3rem"
				/>
			</PostMetadataStyle>
		</PostStyle>
	);
};

export default PostPreview;
