import * as React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Story } from "../../views/story";
import { IconElement } from "../../views/shared";

import {
	setToNextActiveStoryIndex,
	setToPreviousActiveStoryIndex,
} from "../../redux/story/story-viewership/storyViewershipAction";

import { PageStyle } from "../../styles";

import { Left, Right } from "../../assets";

const StoryPageStyle = styled(PageStyle)`
	position: fixed;
	z-index: 50;
	width: 100vw;
	height: 100vh;
	background-color: #1a1a1a;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

const StoryPage = () => {
	const dispatch = useDispatch();

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
			<IconElement onClick={handleStoryLeftOnClick}>
				<Left />
			</IconElement>

			<Story />

			<IconElement onClick={handleStoryRightOnClick}>
				<Right />
			</IconElement>
		</StoryPageStyle>
	);
};

export default StoryPage;
