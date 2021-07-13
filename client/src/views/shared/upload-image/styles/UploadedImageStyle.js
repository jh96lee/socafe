import styled from "styled-components";

export const UploadedImageStyle = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	& img {
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
		object-fit: cover;
	}
`;
