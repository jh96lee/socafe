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
		color: var(--secondary-element-default-color);
		background-color: var(--secondary-element-default-bg-color);
		border-radius: 1rem;
	}
`;
