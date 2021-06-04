import styled from "styled-components";

export const SearchbarTypeStyle = styled.div`
	position: unset;
	display: flex;
	align-items: center;
	gap: 0.7rem;

	& > p {
		font-size: 1.37rem;
		color: var(--primary-text-color);
	}

	& > svg {
		width: 1rem;
		height: 1rem;
		fill: var(--primary-text-color);
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > p {
		text-decoration: underline;
	}
`;
