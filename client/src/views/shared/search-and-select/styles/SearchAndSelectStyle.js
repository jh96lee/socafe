import styled from "styled-components";

export const SearchAndSelectStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
	box-shadow: 0 0 0 1.2px var(--divider-default);
	background-color: var(--input-default-bg-color);

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
