import styled from "styled-components";

export const PostPreviewMetadataStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: auto 50rem min-content auto min-content;
	gap: 1.8rem;
	margin: auto;
	padding: 4rem 5rem;

	& > * {
		grid-column: 1 / 3;
	}

	/* REVIEW: override the above grid-column value */
	& > *:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1;
		justify-self: start;
	}

	/* REVIEW: override the above grid-column value */
	& > *:nth-child(2) {
		grid-column: 2 / 3;
		grid-row: 1;
		justify-self: end;
	}

	@media (max-width: 1600px) {
		grid-auto-rows: auto 35vw min-content auto min-content;
	}
`;
