import styled from "styled-components";

export const PostUserStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;

	& img {
		width: 3.7rem;
		height: 3.7rem;
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
		font-size: 1.35rem;
		color: var(--txt-1);
	}

	& > span {
		font-size: 1.27rem;
	}
`;
