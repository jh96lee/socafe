import styled from "styled-components";

export const StatsAggregateStyle = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-auto-rows: max-content max-content;
	align-items: center;
	gap: 0 1.5rem;
	background-color: var(--bg-1);
	padding: 3rem;
	border-radius: 0.8rem;
	box-shadow: var(--divider-default) 0px 0px 3px 0px;

	& > span {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		font-weight: 500;
	}

	& > h1 {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
		color: var(--char-default);
	}

	& > svg {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
		width: 3.6rem;
		height: 3.6rem;
	}
`;
