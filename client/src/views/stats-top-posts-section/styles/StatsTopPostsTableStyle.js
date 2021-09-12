import styled from "styled-components";

export const StatsTopPostsTableStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 2.2fr 2.2fr;
	grid-auto-rows: min-content;
	overflow: hidden;

	& > *:not(span) {
		border-top: 1px solid var(--divider-graph);
	}

	& > span {
		color: var(--char-graph);
		font-size: 1.15rem;
		font-weight: 600;
		background-color: var(--bg-2);
		letter-spacing: -0.3px;
		padding: 1.4rem 2rem;
	}

	& > p {
		display: flex;
		align-items: center;
		color: var(--char-graph);
		font-weight: 500;
		padding: 0 2rem;
	}
`;
