import styled from "styled-components";

export const UserProfileOwnerBodyStyle = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr;
	width: 100%;
	gap: 2.8rem 0;
	padding: 0 2rem 2rem 2rem;

	& > *:empty {
		display: none;
	}

	& > *:nth-child(1) {
		justify-self: start;
		margin-top: -6.5rem;
	}

	& > *:nth-child(2) {
		margin: 0.5rem 0 0 1rem;
	}

	& > *:nth-child(3),
	& > *:nth-child(4),
	& > *:nth-child(5),
	& > *:nth-child(6) {
		grid-column: 1 / 4;
	}

	& > *:nth-child(6) {
		margin-top: 0.7rem;
	}

	@media (max-width: 800px) {
		grid-template-columns: min-content 1fr 13rem;
		gap: 1.5rem 0;

		& > *:nth-child(5) {
			grid-column: 3 / 4;
			grid-row: 1 / 2;
			height: 4.5rem;
			align-self: center;
		}

		& > *:nth-child(3),
		& > *:nth-child(4),
		& > *:nth-child(6) {
			padding: 0 2rem;
		}
	}

	@media (max-width: 500px) {
		grid-template-columns: min-content 1fr;
		gap: 2rem 0;

		& > *:nth-child(3),
		& > *:nth-child(4),
		& > *:nth-child(5) {
			padding: 0 2.5rem;
		}

		& > *:nth-child(5) {
			grid-column: 1 / 4;
			grid-row: 4;
		}
	}
`;

export const UserProfileOwnerUserNamesMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > h4 {
		color: var(--char-default);
		font-weight: 600;
		letter-spacing: -0.9px;
	}
`;
