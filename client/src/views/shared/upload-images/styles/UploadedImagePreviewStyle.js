import styled from "styled-components";

export const UploadedImagePreviewStyle = styled.div`
	position: relative;
	width: 100%;

	& img {
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
		object-fit: cover;
	}
`;

export const UploadedImageIconDivStyle = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 0.7rem;
	background-color: #d4235f;
	border-radius: 50%;

	& svg {
		fill: #fff;
		width: 1.2rem;
		height: 1.2rem;
	}

	&:hover {
		cursor: pointer;
	}
`;
