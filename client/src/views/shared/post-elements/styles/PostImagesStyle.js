import styled from "styled-components";

export const PostImagesStyle = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	overflow: hidden;

	& > img {
		object-fit: cover;
		border-radius: 1rem;
	}
`;

export const PostMainImageStyle = styled.img`
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${(props) => (props.isImageTall ? "auto" : "80%")};
	height: ${(props) => (props.isImageTall ? "80%" : "auto")};
	max-width: 101%;
	max-height: 101%;
`;

export const PostOverlayImageStyle = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
	width: 110%;
	height: 110%;
	filter: blur(15px);
`;

export const PostImagesDirectionsStyle = styled.div`
	position: absolute;
	z-index: 10;
	bottom: 1.5rem;
	right: 1.5rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
