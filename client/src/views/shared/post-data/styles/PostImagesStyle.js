import styled from "styled-components";

const PostImagesStyle = styled.div`
	position: relative;
	border-radius: 1rem;

	& > img {
		object-fit: cover;
		border-radius: 1rem;
	}

	& > #overlay-post-image {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
	}

	& > #main-post-image {
		position: absolute;
		z-index: 5;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 100%;
		max-height: 100%;
	}

	& [data-is-image-tall="true"] {
		width: auto;
		height: 100%;
	}

	& [data-is-image-tall="false"] {
		width: 100%;
		height: auto;
	}

	& > #overlay {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 1rem;
		z-index: 2;
		width: 100.1%;
		height: 100.1%;
		background-color: #0e0e0e94;
		backdrop-filter: blur(5px);
	}

	& [data-direction="left"] {
		left: 1rem;
	}

	& [data-direction="right"] {
		right: 1rem;
	}
`;

export default PostImagesStyle;
