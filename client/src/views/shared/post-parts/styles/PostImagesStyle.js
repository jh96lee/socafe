import styled from "styled-components";

export const PostImagesStyle = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 1rem;
	overflow: hidden;

	& > img {
		object-fit: cover;
		border-radius: 1rem;
	}
`;

export const PostMainImageStyle = styled.img`
	position: absolute;
	z-index: 5;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${(props) => (props.isImageTall ? "auto" : "101%")};
	height: ${(props) => (props.isImageTall ? "101%" : "auto")};
	max-width: 101%;
	max-height: 101%;
`;

export const PostOverlayImageStyle = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	width: 105%;
	height: 105%;
	filter: blur(10px);
`;
