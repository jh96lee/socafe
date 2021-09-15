import styled from "styled-components";

export const StoryPreviewTextDropdownColorsStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
`;

export const StoryPreviewTextDropdownColorStyle = styled.div`
	background-color: ${(props) => props.storyTextColor};
	width: 2.7rem;
	height: 2.7rem;
	border: 1px solid var(--divider-default);
	border-radius: 50%;
	cursor: pointer;
`;
