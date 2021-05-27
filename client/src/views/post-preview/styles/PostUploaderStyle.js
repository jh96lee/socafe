import styled from "styled-components";

export const PostUploaderStyle = styled.div`
	display: flex;
	align-items: center;

	& img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: 50%;
		margin-right: 1rem;
	}

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	& > div p {
		color: var(--primary-text-color);
	}
`;
