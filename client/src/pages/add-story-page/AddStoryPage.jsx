import * as React from "react";
import styled from "styled-components";

import { AddStoryForm } from "../../views/add-story-form";
import { StoryPreview } from "../../views/story-preview";

import { AddContentPageStyle } from "../../styles";

const StoryPreviewPageStyle = styled.div`
	display: grid;
	grid-template-columns: 35rem 1fr;
`;

const StorySelectorsStyle = styled.div`
	display: flex;
	gap: 1rem;
`;

const BG = styled.div`
	background: ${(props) => props.bg};
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
`;

const AddStoryPage = styled.div`
	display: flex;
	display: grid;
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	grid-template-columns: 35rem auto;
	grid-template-rows: auto;
	max-height: 100vh;
	min-height: 100vh;
`;

const StoryPage = () => {
	return (
		<AddStoryPage>
			<AddStoryForm />

			<StoryPreview />
		</AddStoryPage>
	);
};

export default StoryPage;
