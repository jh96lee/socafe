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

export const StoryHeaderStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 15;
	width: 100%;
	background: linear-gradient(
		to bottom,
		rgb(0 0 0 / 88%),
		rgb(0 0 0 / 85%),
		rgb(0 0 0 / 82%),
		rgb(0 0 0 / 80%),
		rgb(0 0 0 / 78%),
		rgb(0 0 0 / 75%),
		rgb(0 0 0 / 72%),
		rgb(0 0 0 / 70%),
		rgb(0 0 0 / 68%),
		rgb(0 0 0 / 65%),
		rgb(0 0 0 / 62%),
		rgb(0 0 0 / 60%),
		rgb(0 0 0 / 58%),
		rgb(0 0 0 / 56%),
		rgb(0 0 0 / 53%),
		rgb(0 0 0 / 50%),
		rgb(0 0 0 / 47%),
		rgb(0 0 0 / 45%),
		rgb(0 0 0 / 43%),
		rgb(0 0 0 / 40%),
		rgb(0 0 0 / 37%),
		rgb(0 0 0 / 33%),
		rgb(0 0 0 / 29%),
		rgb(0 0 0 / 24%),
		rgb(0 0 0 / 18%),
		rgb(0 0 0 / 14%),
		rgb(0 0 0 / 9%),
		rgb(0 0 0 / 7%),
		rgb(0 0 0 / 3%),
		rgb(0 0 0 / 0%)
	);

	& > *:last-child {
		padding: 1rem;
	}
`;
