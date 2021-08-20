import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Loader, Avatar } from "../../shared";

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

	return (
		<HomeFeedStoryStyle>
			<Avatar
				avatarURL={storyOwner.avatar_url}
				avatarSize="5.5rem"
				avatarOnClick={() => {}}
			/>

			<p>{storyOwner.username}</p>
		</HomeFeedStoryStyle>
	);
};

export default HomeFeedStory;
