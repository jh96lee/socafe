import styled from "styled-components";

export const StoryPreviewImageStyle = styled.div`
	position: absolute;
	z-index: 1;
	display: block;
	width: ${(props) => (props.isImageTall ? "auto" : "90%")};
	height: ${(props) => (props.isImageTall ? "90%" : "auto")};
	border-radius: 1rem;
	overflow: hidden;
	cursor: move;

	& > img {
		display: flex;
		width: ${(props) => (props.isImageTall ? "auto" : "100%")};
		height: ${(props) => (props.isImageTall ? "100%" : "auto")};
		object-fit: cover;
	}

	&:hover {
		cursor: pointer;
	}
`;
