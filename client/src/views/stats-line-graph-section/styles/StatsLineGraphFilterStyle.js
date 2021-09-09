import styled from "styled-components";

export const StatsLineGraphFilterStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 1.2rem;
	background-color: var(--bg-2);
	padding: 1rem 1.15rem;
	border-radius: 0.5rem;

	& > p {
		font-weight: 500;
		color: var(--char-1);
	}

	& > svg {
		fill: var(--char-1);
		width: 1.2rem;
		height: 1.2rem;
	}

	&:hover {
		cursor: pointer;
		background-color: var(--bg-2-hover);
	}
`;
