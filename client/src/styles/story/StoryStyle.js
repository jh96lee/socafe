import styled from "styled-components";

const StoryStyle = styled.div`
	position: relative;
	background: ${(props) => props.storyBackground};
	/* REVIEW: by setting the width in vh unit, we can prevent the width from changing when the width of the viewport decreases */
	width: ${(props) => `${props.storyWidth}vh`};
	height: ${(props) => `${props.storyHeight}vh`};
	margin: auto;
	border-radius: 1rem;
	border: 2px solid var(--separator-2);

	@media (max-width: ${(props) =>
			`${props.convertUnitToViewWidthBreakingPoint}px`}) {
		width: ${(props) => `${props.responsiveStoryWidth}vw`} !important;
		height: ${(props) => `${props.responsiveStoryHeight}vw`} !important;
	}
`;

export default StoryStyle;
