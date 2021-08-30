import styled from "styled-components";

export const StoryProgressBarStyle = styled.div`
	position: relative;
	z-index: 1;
	background-color: #72727273;
	width: 100%;
	height: 0.5rem;
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
	overflow: hidden;
`;

export const StoryProgressionBarStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	width: ${(props) => `${props.barWidth}%`};
	background-color: #fff;
	height: 0.5rem;
	border-radius: 1rem;
`;
