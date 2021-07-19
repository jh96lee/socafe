import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
	UserMetadata,
	PostMain,
	PostTopics,
	TextArea,
	Skeleton,
} from "../../shared";
import MainPostActions from "./MainPostActions";
import MainPostNumericData from "./MainPostNumericData";

const MainPostMetadataStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: auto 50rem min-content auto min-content;
	gap: 1.8rem;
	margin: auto;
	padding: 4rem 5rem;

	& > * {
		grid-column: 1 / 3;
	}

	& > *:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1;
		justify-self: start;
	}

	& > *:nth-child(2) {
		grid-column: 2 / 3;
		grid-row: 1;
		justify-self: end;
	}
`;

const MainPostMetadata = ({
	mainPost,
	isPostCommentsOpen,
	handleOpenAndClosePostCommentsOnClick,
}) => {
	const {
		post_date,
		post_images,
		post_tagged_users,
		post_captions,
		post_topics,
		total_post_likes,
		total_post_comments,
	} = mainPost;

	const { user } = useSelector((state) => state.userReducer);

	console.log(mainPost);

	return (
		<MainPostMetadataStyle>
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

			<MainPostActions
				isPostCommentsOpen={isPostCommentsOpen}
				handleOpenAndClosePostCommentsOnClick={
					handleOpenAndClosePostCommentsOnClick
				}
			/>

			<PostMain
				postImagesArray={post_images}
				postTaggedUsersArray={post_tagged_users}
			/>

			<MainPostNumericData
				totalPostLikes={total_post_likes}
				totalPostComments={total_post_comments}
				postDate={post_date}
			/>

			<TextArea textAreaNodesArray={post_captions} />

			<PostTopics postTopicsArray={post_topics} />
		</MainPostMetadataStyle>
	);
};

export default MainPostMetadata;
