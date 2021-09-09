import styled from "styled-components";

export const StatsLineGraphHeaderStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	& > h2 {
		color: var(--char-default);
	}
`;

export const StatsLineGraphFiltersStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
`;
