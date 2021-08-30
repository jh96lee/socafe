import styled from "styled-components";

export const StoryPreviewTextStyle = styled.div`
	position: absolute;
	z-index: 10;
	max-width: 90%;
	border-radius: 1rem;
`;

export const StoryPreviewTextContentEditableStyle = styled.div`
	color: var(--text-1);
	font-size: ${(props) => `${props.storyFontSize}vh`};
	letter-spacing: -0.4px;
	width: fit-content;
	height: fit-content;
	border-radius: 1rem;
	box-shadow: none;
	outline: none;

	&:empty {
		border-radius: 0;
		/* FIX: color */
		border-bottom: 2px solid grey;
	}

	&:hover {
		cursor: move;
	}

	&:empty:before {
		content: attr(placeholder);
		pointer-events: none;
		display: block;
		color: grey !important;
		font-weight: 600 !important;
		font-style: italic !important;
		text-decoration: none !important;
	}

	@media (max-width: ${(props) =>
			`${props.convertUnitToViewWidthBreakingPoint}px`}) {
		font-size: ${(props) => `${props.responsiveStoryFontSize}vw`} !important;
	}
`;
