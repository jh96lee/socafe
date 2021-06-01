import styled from "styled-components";

export const PostUserStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;

	& img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: 50%;
	}
`;

export const PostUserMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	& > p {
		color: var(--primary-text-color);
	}
`;
