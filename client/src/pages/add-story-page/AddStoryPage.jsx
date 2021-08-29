import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Loader } from "../../views/shared";
import { AddStorySidebar } from "../../views/add-story-sidebar";
import { StoryPreview } from "../../views/story-preview";

import { fetchStoryBackgrounds } from "../../redux/add-story/story-background/storyBackgroundAction";

const AddStoryPage = styled.div`
	display: flex;
	display: grid;
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	grid-template-columns: 35rem auto;
	grid-template-rows: auto;
	max-height: 100vh;
	min-height: 100vh;
	min-width: 100vw;
`;

const StoryPage = () => {
	const dispatch = useDispatch();

	const { isStoryBackgroundsLoaded } = useSelector(
		(state) => state.storyBackgroundReducer
	);

	React.useEffect(() => {
		dispatch(fetchStoryBackgrounds());
	}, []);

	return (
		<AddStoryPage>
			{isStoryBackgroundsLoaded ? (
				<React.Fragment>
					<AddStorySidebar />

					<StoryPreview />
				</React.Fragment>
			) : (
				<Loader />
			)}
		</AddStoryPage>
	);
};

export default StoryPage;
