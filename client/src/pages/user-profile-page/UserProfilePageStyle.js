import styled from "styled-components";

import { PageStyle } from "../../styles";

export const UserProfilePageStyle = styled(PageStyle)`
	display: grid;
	grid-template-columns: 37rem 1fr;
	grid-auto-rows: min-content 1fr;
	gap: 1.8rem 2.5rem;
	width: 90%;
	min-width: 90%;
	margin: 3rem auto;

	& > *:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}

	& > *:nth-child(2) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}

	& > *:nth-child(3) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-auto-rows: min-content;

		& > * {
			grid-column: 1 / 2 !important;
		}

		& > *:nth-child(1) {
			grid-row: 1 / 2;
		}

		& > *:nth-child(2) {
			grid-row: 2 / 3;
		}

		& > *:nth-child(3) {
			grid-row: 3 / 4;
		}
	}
`;
