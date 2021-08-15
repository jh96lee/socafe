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

const StoryPage = () => {
	const [selectedBackgroundIndex, setSelectedBackgroundIndex] =
		React.useState(null);

	const backgroundSelectorsArray = [
		"linear-gradient(45deg, #363eff, #ff0000)",
		"linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0)",
		"linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)",
		"linear-gradient(to top, #0060ef, #0091ff, #00b8ff, #00d9f7, #00f6e1)",
		"linear-gradient(to right bottom, #ef0056, #ef0074, #e0009b, #bc00c8, #6900f6)",
		"linear-gradient(to bottom, #ef1b51, #f12d81, #e44bae, #ca69d3, #a682ee, #7b98fe, #49abff, #00baff, #00ccff, #00ddff, #29ecf9, #5ffbf1)",
		"linear-gradient(to right top, #e7ff00, #09f77f, #00dfd4, #00bdfe, #1292eb)",
	];

	return (
		<AddContentPageStyle>
			<AddStoryForm />

			<StoryPreview
				selectedBG={
					selectedBackgroundIndex !== null
						? backgroundSelectorsArray[selectedBackgroundIndex]
						: "none"
				}
			/>
		</AddContentPageStyle>
	);
};

export default StoryPage;
