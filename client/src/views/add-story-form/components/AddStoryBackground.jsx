import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
	setSelectedStoryBackground,
	fetchStoryBackgrounds,
} from "../../../redux/add-story/story-background/storyBackgroundAction";

import { AddContentStyle } from "../../../styles";

const StoryBackgroundsStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 3rem 2rem;
`;

const StoryBackgroundStyle = styled.div`
	background: ${(props) => props.background};
	width: 4.5rem;
	height: 4.5rem;
	border-radius: 50%;
	cursor: pointer;
`;

const AddStoryBackground = () => {
	const dispatch = useDispatch();

	const { storyBackgrounds } = useSelector(
		(state) => state.storyBackgroundReducer
	);

	React.useEffect(() => {
		dispatch(fetchStoryBackgrounds());
	}, []);

	return (
		<AddContentStyle>
			<h3>Add Background</h3>

			<StoryBackgroundsStyle>
				{storyBackgrounds.map(({ id, background_gradient }, idx) => {
					return (
						<StoryBackgroundStyle
							key={`story-background__${id}`}
							background={background_gradient}
							onClick={() => {
								dispatch(setSelectedStoryBackground(storyBackgrounds[idx]));
							}}
						/>
					);
				})}
			</StoryBackgroundsStyle>
		</AddContentStyle>
	);
};

export default AddStoryBackground;
