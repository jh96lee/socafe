import styled from "styled-components";

export const UserProfileBodyStyle = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr;
	width: 100%;

	& > *:nth-child(1) {
		justify-self: start;
		margin: -6rem 0 0 2rem;
	}

	& > *:nth-child(2) {
		margin: 0.5rem 0 0 1rem;
	}

	& > *:nth-child(3),
	& > *:nth-child(4),
	& > *:nth-child(5) {
		grid-column: 1 / 4;
		margin-top: 1.35rem;
		padding: 0 2rem;
	}

	@media (max-width: 800px) {
		grid-template-columns: min-content 1fr 18rem;

		& > *:nth-child(5) {
			grid-column: 3 / 4;
			grid-row: 1 / 2;
		}
	}

	@media (max-width: 500px) {
		grid-template-columns: min-content 1fr;

		& > *:nth-child(3),
		& > *:nth-child(4),
		& > *:nth-child(5) {
			padding: 0 3rem;
		}

		& > *:nth-child(5) {
			grid-column: 1 / 4;
			grid-row: 4;
		}
	}
`;

export const UserProfileUserNamesMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > h5 {
		color: var(--text-1);
		font-size: 1.7rem;
		font-weight: 600;
	}
`;
