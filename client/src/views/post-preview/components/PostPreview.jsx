import * as React from "react";
import { useSelector } from "react-redux";

import {
	PostImages,
	PostTaggedUsers,
	PostTopics,
	UserMetadata,
	TextArea,
	Skeleton,
} from "../../shared";
import PostPreviewActions from "./PostPreviewActions";
import PostPreviewEmptyTopics from "./PostPreviewEmptyTopics";
import PostPreviewComments from "./PostPreviewComments";
import PostPreviewCommentsInput from "./PostPreviewCommentsInput";

import { PostPreviewStyle } from "../styles/PostPreviewStyle";
import { PostPreviewOverflowStyle } from "../styles/PostPreviewOverflowStyle";
import { PostMainStyle } from "../../../styles";

import { useHistory } from "react-router-dom";

const PostPreview = () => {
	const { user } = useSelector((state) => state.userReducer);
	const { uploadedPostImagesArray } = useSelector(
		(state) => state.postImagesReducer
	);
	const { postUsersArray } = useSelector((state) => state.postUsersReducer);
	const { postCaptionsNodesArray } = useSelector(
		(state) => state.postCaptionsReducer
	);
	const { postTopicsArray } = useSelector((state) => state.postTopicsReducer);

	return (
		<PostPreviewStyle postSingleColumnBreakingPoint="1350px">
			<PostMainStyle>
				{uploadedPostImagesArray.length === 0 ? (
					<Skeleton
						skeletonWidth="100%"
						skeletonHeight="100%"
						skeletonBorderRadius="0rem"
					/>
				) : (
					<PostImages postImagesArray={uploadedPostImagesArray} />
				)}

				<PostTaggedUsers postTaggedUsersArray={postUsersArray} />
			</PostMainStyle>

			<UserMetadata
				userID={user.id}
				avatarURL={user.avatar_url}
				username={user.username}
				fullName={user.full_name}
				avatarSize="4.1rem"
				usernameFontSize="1.3rem"
				fullNameFontSize="1.2rem"
				avatarOnClick={null}
			/>

			<PostPreviewActions />

			<PostPreviewOverflowStyle>
				{postCaptionsNodesArray.length === 0 ||
				(postCaptionsNodesArray.length === 1 &&
					postCaptionsNodesArray[0].nodeType === "BR") ? (
					<Skeleton skeletonWidth="100%" skeletonHeight="15rem" />
				) : (
					<TextArea textAreaNodesArray={postCaptionsNodesArray} />
				)}

				{postTopicsArray.length === 0 ? (
					<PostPreviewEmptyTopics />
				) : (
					<PostTopics postTopicsArray={postTopicsArray} />
				)}

				<PostPreviewComments />
			</PostPreviewOverflowStyle>

			<PostPreviewCommentsInput />
		</PostPreviewStyle>
	);
};

export default PostPreview;
