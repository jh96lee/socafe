import * as React from "react";
import { useSelector } from "react-redux";

import {
	PostImages,
	PostSelectedCategories,
	PostNumericMetadata,
	PostContents,
	PostTaggedUsers,
	PostComments,
} from "../shared/post-parts";
import { Skeleton } from "../shared";

import { PostStyle, PostMetadataStyle, PostMainDataStyle } from "../../styles";

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
			<PostMainDataStyle>
				<PostImages
					postImagesArray={uploadedPostImagesArray}
					conditionalPostImagesRenderingVariable={
						uploadedPostImagesArray.length > 0
					}
				/>

				<PostTaggedUsers
					postTaggedUsersArray={taggedPostUsersArray}
					conditionalPostTaggedUsersRenderingVariable={
						taggedPostUsersArray.length > 0
					}
				/>
			</PostMainDataStyle>

			<PostNumericMetadata
				postUser={user}
				conditionalPostUserRenderingVariable={user}
				conditionalPostTotalLikesRenderingVariable={null}
				conditionalPostTotalCommentsRenderingVariable={null}
			/>

			<PostMetadataStyle>
				<PostSelectedCategories
					selectedPostCategoriesArray={selectedPostCategoriesArray}
					conditionalPostSelectedCategoriesRenderingVariable={
						selectedPostCategoriesArray.length > 0
					}
				/>

				<PostContents
					postContentsArray={postCaptionNodesArray}
					conditionalPostContentsRenderingVariable={
						postCaptionNodesArray.length > 0
					}
				/>

				<PostComments />
			</PostMetadataStyle>

			<Skeleton
				skeletonHeight="4.2rem"
				skeletonWidth="90%"
				skeletonBorderRadius="3rem"
				skeletonMargin="auto"
			/>
		</PostStyle>
	);
};

export default PostPreview;
