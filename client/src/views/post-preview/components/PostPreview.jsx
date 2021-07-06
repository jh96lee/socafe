import * as React from "react";
import { useSelector } from "react-redux";

import {
	PostImages,
	PostSelectedCategories,
	PostContents,
	PostTaggedUsers,
	PostComments,
	PostTotalComments,
	PostBookmark,
} from "../../shared/post-elements";
import { Skeleton, UserMetadata, PostLikes } from "../../shared";

import {
	PostStyle,
	PostMainDataStyle,
	PostHorizontalMetadataStyle,
	PostVerticalMetadataStyle,
	PostTotalsMetadataStyle,
} from "../../../styles";

const PostPreview = () => {
	const { uploadedPostImagesArray } = useSelector(
		(state) => state.postImagesReducer
	);

	const { postCategoriesArray } = useSelector(
		(state) => state.postCategoriesReducer
	);

	const { postUsersArray } = useSelector((state) => state.postUsersReducer);

	const { postCaptionNodesArray } = useSelector(
		(state) => state.postCaptionReducer
	);

	// REVIEW: need this to render out the user data
	const { user } = useSelector((state) => state.userReducer);

	return (
		<PostStyle>
			<PostMainDataStyle>
				<PostImages
					postImagesArray={uploadedPostImagesArray}
					conditionalRenderingVariable={uploadedPostImagesArray.length > 0}
				/>

				<PostTaggedUsers
					postTaggedUsersArray={postUsersArray}
					conditionalRenderingVariable={postUsersArray.length > 0}
				/>
			</PostMainDataStyle>

			<PostHorizontalMetadataStyle>
				<UserMetadata
					userID={user.id}
					avatarURL={user.avatar_url}
					username={user.username}
					fullName={user.full_name}
					avatarSize="4.4rem"
					usernameFontSize="1.4rem"
					fullNameFontSize="1.3rem"
					onClick={null}
					conditionalRenderingVariable={user}
				/>

				<PostTotalsMetadataStyle>
					<PostLikes
						conditionalRenderingVariable={false}
						disablePostLikesOnClick={true}
					/>

					<PostTotalComments conditionalRenderingVariable={false} />

					<PostBookmark disablePostBookmarkOnClick={true} />
				</PostTotalsMetadataStyle>
			</PostHorizontalMetadataStyle>

			<PostVerticalMetadataStyle>
				<PostSelectedCategories
					selectedPostCategoriesArray={postCategoriesArray}
					conditionalRenderingVariable={postCategoriesArray.length > 0}
				/>

				<PostContents
					postContentsArray={postCaptionNodesArray}
					conditionalRenderingVariable={postCaptionNodesArray.length > 0}
				/>

				<PostComments />
			</PostVerticalMetadataStyle>

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
