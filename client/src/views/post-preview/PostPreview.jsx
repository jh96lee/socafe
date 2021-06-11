import * as React from "react";
import { useSelector } from "react-redux";

import {
	PostImages,
	PostSelectedCategories,
	PostContents,
	PostTaggedUsers,
	PostComments,
	PostTotalLikes,
	PostTotalComments,
	PostBookmark,
} from "../shared/post-parts";
import { Skeleton, User } from "../shared";

import {
	PostStyle,
	PostMainDataStyle,
	PostHorizontalMetadataStyle,
	PostVerticalMetadataStyle,
	PostInteractionsStyle,
} from "../../styles";

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

			<PostHorizontalMetadataStyle>
				<User
					userID={user.id}
					avatarURL={user.avatar_url}
					username={user.username}
					fullName={user.full_name}
					avatarSize="3.7rem"
					usernameFontSize="1.37rem"
					fullNameFontSize="1.27rem"
					onClick={null}
					conditionalRenderingVariable={user}
				/>

				<PostInteractionsStyle>
					<PostTotalLikes conditionalPostTotalLikesRenderingVariable={null} />

					<PostTotalComments
						conditionalPostTotalCommentsRenderingVariable={null}
					/>

					<PostBookmark />
				</PostInteractionsStyle>
			</PostHorizontalMetadataStyle>

			<PostVerticalMetadataStyle>
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
