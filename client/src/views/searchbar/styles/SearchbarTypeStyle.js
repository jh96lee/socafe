import styled from "styled-components";

export const SearchbarTypeStyle = styled.div`
	position: unset;
	display: flex;
	align-items: center;
	gap: 0.7rem;

	& > p {
		color: var(--text-1);
	}

	& > svg {
		width: 1rem;
		height: 1rem;
		fill: var(--icon-default-color);
	}

	&:hover {
		cursor: pointer;
	}
`;
