import styled from "styled-components";

export const StatsTopPostTopicsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	padding: 0 2rem;

	& > p {
		font-size: 1.35rem;
		font-weight: 500;
		padding: 0.7rem 1.4rem;
		/* FIX: fix root */
		color: var(--char-blue-1);
		background-color: var(--bg-blue-1);
		border-radius: 1rem;
	}
`;
