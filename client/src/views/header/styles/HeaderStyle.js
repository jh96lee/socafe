import styled from "styled-components";

export const HeaderStyle = styled.header`
	position: sticky;
	top: 0;
	z-index: 120;
	grid-column: 1 / 3;
	grid-row: 1 / 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--bg-1);
	height: 8rem;
	padding: 0 2rem;
	box-shadow: 0px 0px 5px 2.5px var(--separator-1);

	@media (max-width: 700px) {
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		justify-items: end;
		gap: 1rem;
		padding: 0 1rem;
	}

	/* @media (max-width: 1350px) {
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		justify-items: end;
		gap: 1rem;
		padding: 0 1rem;
	} */
`;
