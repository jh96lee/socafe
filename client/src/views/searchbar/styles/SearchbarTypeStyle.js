import styled from "styled-components";

export const SearchbarTypeStyle = styled.div`
	position: unset;
	display: flex;
	align-items: center;
	gap: 0.7rem;

	& > p {
		color: var(--char-default);
	}

	& > svg {
		width: 1rem;
		height: 1rem;
		fill: var(--char-default);
	}

	&:hover {
		cursor: pointer;
	}
`;
