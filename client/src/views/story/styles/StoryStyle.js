import styled from "styled-components";

export const StoryStyle = styled.div`
	position: relative;
	display: block;

	border-radius: 1rem;
	overflow: hidden;
	background: ${(props) => props.storyBackground};

	width: 48rem;
	height: 72rem;

	@media (max-width: 600px) {
		width: ${(props) => props.responsiveStoryWidth};
		height: ${(props) => props.responsiveStoryHeight};
	}
`;
