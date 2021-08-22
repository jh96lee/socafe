import styled from "styled-components";

export const StoryImageStyle = styled.img`
	position: absolute;
	/* REVIEW: if one of imageTop or imageLeft is NULL, then top and left will always be 50% with appropriate transform property */
	top: ${(props) => (props.imageTop === null ? "50%" : props.imageTop)};
	left: ${(props) => (props.imageLeft === null ? "50%" : props.imageLeft)};
	transform: ${(props) =>
		(props.imageTop === null && props.imageLeft === null) ||
		props.isImageTransformed
			? "translate(-50%, -50%)"
			: "none"};
	width: ${(props) => (props.isImageTall ? "auto" : "90%")};
	height: ${(props) => (props.isImageTall ? "90%" : "auto")};
	border-radius: 1rem;
	object-fit: cover;
`;
