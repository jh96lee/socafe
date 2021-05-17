import styled from "styled-components";

export const PostUploaderStyle = styled.div`
	display: flex;
	align-items: center;

	& img {
		width: 4.5rem;
		height: 4.5rem;
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
		font-size: 1.5rem;
		color: var(--primary-text-color);
	}

	& > div span {
		font-size: 1.37rem;
		color: var(--primary-text-color);
		letter-spacing: -0.6px;
	}
`;
