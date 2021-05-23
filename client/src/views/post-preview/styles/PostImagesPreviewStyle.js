import styled from "styled-components";

export const PostImagesPreviewStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	max-width: 65rem;
	height: 60rem;
	border-radius: 1rem;

	& > #overlay {
		position: absolute;
		border-radius: 1rem;
		z-index: 2;
		width: 100%;
		height: 100%;
		background-color: #0e0e0e94;
		backdrop-filter: blur(5px);
	}

	& #post-images-preview-icon-left {
		left: 1rem;
	}

	& #post-images-preview-icon-right {
		right: 1rem;
	}

	/* REVIEW: this is to resize the height of the image container and skeleton */
	@media (max-width: 1350px) {
		height: 55rem;
	}

	@media (max-width: 1000px) {
		height: 40rem;
	}

	@media (max-width: 750px) {
		height: 30rem;
	}
`;

const PostImagePreviewStyle = styled.img`
	object-fit: cover;
	border-radius: 1rem;
`;

export const PostOverlayImageStyle = styled(PostImagePreviewStyle)`
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 100%;
`;

export const PostMainImageStyle = styled(PostImagePreviewStyle)`
	position: absolute;
	z-index: 3;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${(props) => (props.isImageWide ? "100%" : "auto")};
	height: ${(props) => (props.isImageWide ? "auto" : "100%")};
	max-width: 100%;
	max-height: 100%;
`;

export const PostImagesPreviewIconStyle = styled.div`
	position: absolute;
	z-index: 5;
	top: 50%;
	transform: translateY(-50%);
	padding: 1.3rem;
	border-radius: 50%;
	background-color: #f5f5f5;
	box-shadow: 0 0 0 1px #b9c8cf;

	& svg {
		fill: #000;
		width: 1.8rem;
		height: 1.8rem;
	}

	&:hover {
		cursor: pointer;
	}
`;
