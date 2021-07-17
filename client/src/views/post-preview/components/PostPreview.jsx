import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
	UserMetadata,
	IconElement,
	PostMain,
	PostTopics,
	TextArea,
	Skeleton,
} from "../../shared";
import PostPreviewActions from "./PostPreviewActions";
import PostPreviewComments from "./PostPreviewComments";

import { DoubleArrowLeft } from "../../../assets";

const PostPreviewStyle = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 60rem 38rem;
	grid-auto-rows: min-content min-content min-content 45rem min-content;
	gap: 0rem 3rem;
	margin: auto;
	padding: 2.2rem;
	background: var(--bg-1);
	border: 1px solid var(--input-default-1);
	box-shadow: 0 2px 12px
		${(props) => (props.theme.isDarkMode ? "#000" : "#00000033")};
	border-radius: 2rem;
	overflow: scroll;

	& > *:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 5;
	}

	& > *:nth-child(2) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		margin-bottom: 0.7rem;
	}

	& > *:nth-child(3) {
		margin-bottom: 2rem;
	}

	& > *:nth-child(4) {
		margin-bottom: 2rem;
	}
`;

const PostPreview = () => {
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
		<PostPreviewStyle>
			<PostMain
				postImagesArray={uploadedPostImagesArray}
				postTaggedUsersArray={postUsersArray}
			/>

			{postTopicsArray.length > 0 ? (
				<PostTopics postTopicsArray={postTopicsArray} />
			) : (
				<Skeleton skeletonWidth="10rem" skeletonHeight="3rem" />
			)}

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

			<PostPreviewActions />

			{postCaptionsNodesArray.length === 1 &&
			postCaptionsNodesArray[0].nodeType === "br" ? (
				<Skeleton skeletonWidth="100%" skeletonHeight="20rem" />
			) : (
				<TextArea textAreaNodesArray={postCaptionsNodesArray} />
			)}

			<PostPreviewComments />

			<IconElement
				iconID="post-preview__double-arrow-left"
				iconRole="button"
				iconElementStyleObject={{
					elementPosition: "absolute",
					elementTop: "10px",
					elementRight: "10px",
					elementBackgroundColor: "transparent",
					iconSize: "1.5rem",
				}}
			>
				<DoubleArrowLeft />
			</IconElement>
		</PostPreviewStyle>
	);
};

export default PostPreview;
