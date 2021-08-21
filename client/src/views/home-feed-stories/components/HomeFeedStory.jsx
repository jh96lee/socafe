import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Loader, Avatar } from "../../shared";

import { setUserStoryIDsArray } from "../../../redux/story/story-viewership/storyViewershipAction";

const HomeFeedStoryStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.7rem;

	& > p {
		color: var(--text-1);
		font-size: 1.3rem;
	}
`;

const HomeFeedStory = ({ storyOwner, storyIDsArray }) => {
	const dispatch = useDispatch();

	const history = useHistory();

	return (
		<HomeFeedStoryStyle
			onClick={() => {
				dispatch(setUserStoryIDsArray(storyIDsArray));

				history.push(`/story/${storyOwner.id}/${storyIDsArray[0]}`);
			}}
		>
			<Avatar
				userID={storyOwner.id}
				username={storyOwner.username}
				avatarURL={storyOwner.avatar_url}
				avatarSize="5.5rem"
				isAvatarBubblePresent={true}
			/>

			<p>{storyOwner.username}</p>
		</HomeFeedStoryStyle>
	);
};

export default HomeFeedStory;
