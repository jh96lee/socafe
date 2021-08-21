import * as React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Story } from "../../views/story";
import { IconElement, Avatar } from "../../views/shared";

import {
	setToNextActiveStoryIndex,
	setToPreviousActiveStoryIndex,
} from "../../redux/story/story-viewership/storyViewershipAction";

import {
	AddContentHeaderStyle,
	AddContentFormStyle,
	AddContentsStyle,
} from "../../styles";

import { Left, Right } from "../../assets";

const StoryPageStyle = styled.div`
	position: fixed;
	z-index: 50;
	width: 100vw;
	height: 100vh;
	background-color: #1a1a1a;

	display: grid;
	grid-template-columns: 35rem 1fr;
	gap: 3rem;
`;

const HomeFeedStoryStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	& > p {
		color: var(--text-1);
		font-size: 1.4rem;
	}
`;

const ActiveStoryStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	margin: auto;
`;

const StoryPage = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const { homeFeedStories } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const { activeStory } = useSelector((state) => state.activeStoryReducer);

	const handleStoryLeftOnClick = () => {
		if (activeStory.id) {
			dispatch(setToPreviousActiveStoryIndex());
		}
	};

	const handleStoryRightOnClick = () => {
		if (activeStory.id) {
			dispatch(setToNextActiveStoryIndex());
		}
	};

	return (
		<StoryPageStyle>
			<AddContentFormStyle>
				<AddContentHeaderStyle>
					<IconElement
						iconElementStyleObject={{
							elementPadding: "0.6rem",
							iconSize: "2.5rem",
						}}
						onClick={() => history.push("/")}
					>
						<Left />
					</IconElement>

					<h2>Stories</h2>
				</AddContentHeaderStyle>

				<AddContentsStyle>
					{homeFeedStories.length !== 0 &&
						homeFeedStories.map(({ storyOwner, storyIDsArray }) => {
							return (
								<HomeFeedStoryStyle>
									<Avatar
										userID={storyOwner.id}
										username={storyOwner.username}
										avatarURL={storyOwner.avatar_url}
										avatarSize="5rem"
										isAvatarBubblePresent={true}
									/>

									<p>{storyOwner.username}</p>
								</HomeFeedStoryStyle>
							);
						})}
				</AddContentsStyle>
			</AddContentFormStyle>

			<ActiveStoryStyle>
				<IconElement onClick={handleStoryLeftOnClick}>
					<Left />
				</IconElement>

				<Story />

				<IconElement onClick={handleStoryRightOnClick}>
					<Right />
				</IconElement>
			</ActiveStoryStyle>
		</StoryPageStyle>
	);
};

export default StoryPage;
