import styled from "styled-components";

export const HeaderStyle = styled.header`
	position: sticky;
	top: 0;
	z-index: 20;
	grid-column: 1 / 3;
	grid-row: 1 / 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--bg-1);
	padding: 0 2rem;
	box-shadow: 0px 0px 5px 2.5px var(--divider-default);

	@media (max-width: 750px) {
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		justify-items: end;
		gap: 1rem;
		padding: 0 1rem;

		/* REVIEW: move middle header to the end and have it positioned right next to HeaderEnd */
		& > *:nth-child(2) {
			justify-self: end;
		}
	}
`;
