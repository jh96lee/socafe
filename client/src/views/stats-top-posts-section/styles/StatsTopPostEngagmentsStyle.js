import styled from "styled-components";

export const StatsTopPostEngagmentsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	padding: 0 2rem;

	& > p {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		color: var(--char-default);
		font-size: 1.5rem;
		font-weight: 500;

		& > svg {
			fill: var(--char-default);
			width: 2rem;
			height: 2rem;
		}
	}
`;
