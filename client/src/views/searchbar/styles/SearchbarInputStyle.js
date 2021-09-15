import styled from "styled-components";

export const SearchbarInputStyle = styled.div`
	position: unset;

	/* FIX */
	& button {
		font-size: 1.37rem;
		letter-spacing: -0.4px;
		outline: none;
		border: none;
		border-radius: 0.5rem;
		padding: 1.3rem 0;
		color: var(--char-default);
		background-color: transparent;
		border: 1px solid var(--separator-2);
	}

	& button:hover {
		cursor: pointer;
		background-color: var(--secondary-element-hover-bg-color);
	}
`;
