import * as React from "react";
import { useSelector } from "react-redux";

import { UserMetadata, PostTopics, TextArea, Skeleton } from "../../shared";
import PostPreviewActions from "./PostPreviewActions";
import PostPreviewNumericData from "./PostPreviewNumericData";

import { PostPreviewMetadataStyle } from "../styles/PostPreviewMetadataStyle";

const PostPreviewMetadata = ({
	isPostCommentsOpen,
	handleOpenAndClosePostCommentsOnClick,
}) => {
	const { uploadedPostImagesArray } = useSelector(
		(state) => state.postImagesReducer
	);

	const { postUsersArray } = useSelector((state) => state.postUsersReducer);

	const { user } = useSelector((state) => state.userReducer);

	const { postTopicsArray } = useSelector((state) => state.postTopicsReducer);

	const { postCaptionsNodesArray } = useSelector(
		(state) => state.postCaptionsReducer
	);

	return (
		<PostPreviewMetadataStyle>
			<UserMetadata
				userID={user.id}
				avatarURL={user.avatar_url}
				username={user.username}
				fullName={user.full_name}
				avatarSize="4.5rem"
				usernameFontSize="1.4rem"
				fullNameFontSize="1.3rem"
				avatarOnClick={null}
			/>

			<PostPreviewActions
				isPostCommentsOpen={isPostCommentsOpen}
				handleOpenAndClosePostCommentsOnClick={
					handleOpenAndClosePostCommentsOnClick
				}
			/>

			{/* <PostMain
				postImagesArray={uploadedPostImagesArray}
				postTaggedUsersArray={postUsersArray}
			/> */}

			<PostPreviewNumericData />

			{postCaptionsNodesArray.length === 1 &&
			postCaptionsNodesArray[0].nodeType === "br" ? (
				<Skeleton skeletonWidth="100%" skeletonHeight="20rem" />
			) : (
				<TextArea textAreaNodesArray={postCaptionsNodesArray} />
			)}

			{postTopicsArray.length > 0 ? (
				<PostTopics postTopicsArray={postTopicsArray} />
			) : (
				<Skeleton skeletonWidth="10rem" skeletonHeight="3rem" />
			)}
		</PostPreviewMetadataStyle>
	);
};

export default PostPreviewMetadata;
