import styled from "styled-components";

export const HeaderStyle = styled.header`
	position: sticky;
	top: 0;
	grid-column: 1 / 3;
	grid-row: 1 / 2;
	background-color: var(--bg-1);
	box-shadow: 0px 0px 5px 2.5px var(--separator-1);
	padding: 0 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 50;

	@media (max-width: 700px) {
		display: grid;
		grid-template-columns: 1fr min-content min-content;
		padding: 0 1rem;
	}
`;

export const HeaderStart = styled.div`
	display: flex;
	align-items: center;

	/* REVIEW: burger icon */
	& > *:first-child {
		display: none;
	}

	@media (max-width: 700px) {
		& > *:first-child {
			display: block;
			margin-right: 0.5rem;
		}
	}
`;

export const HeaderEnd = styled.div`
	display: flex;
	align-items: center;

	& > *:first-child {
		margin-left: 0.8rem;
	}

	& > *:last-child {
		margin-left: 1rem;
	}
`;
