import styled from "styled-components";

export const ExplorePostStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	height: 100%;
	max-height: 100%;
	border-radius: 1rem;
	overflow: hidden;

	& > img {
		width: 100%;
		height: 24rem;
		min-height: 24rem;
		object-fit: cover;
		border: 1px solid var(--divider-default);
		border-radius: 1rem;
	}

	&:hover {
		cursor: pointer;
	}
`;

export const ExplorePostFooterStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
	height: fit-content;
	padding: 0 0.5rem;
`;
