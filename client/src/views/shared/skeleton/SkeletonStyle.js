import styled from "styled-components";

export const SkeletonStyle = styled.div`
	width: ${(props) => props.skeletonWidth};
	height: ${(props) => props.skeletonHeight};
	min-height: ${(props) => props.skeletonHeight};
	background-color: var(--bg-3);
	border-radius: ${(props) =>
		props.skeletonBorderRadius ? props.skeletonBorderRadius : "1rem"};
	margin: ${(props) => props.skeletonMargin};
`;
