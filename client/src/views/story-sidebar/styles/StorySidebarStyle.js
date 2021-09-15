import styled from "styled-components";

export const StorySidebarStyle = styled.div`
	display: grid;
	grid-auto-rows: min-content 1fr min-content;
	box-shadow: 0 0 0 1.4px var(--divider-default);
	max-height: 100vh;

	/* FIX */
	& button {
		position: relative;
		outline: none;
		border: none;
		border-radius: 0.5rem;
		padding: 1.4rem 0;
		color: var(--char-default);
		background-color: transparent;
		border: 2px solid var(--separator-2);

		display: flex;
		justify-content: center;
		align-items: center;

		& > svg {
			fill: var(--char-default);
			width: 2rem;
			height: 2rem;
		}

		&:hover {
			cursor: pointer;
			background-color: var(--secondary-element-hover-bg-color);
		}
	}
`;

export const StorySidebarHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	height: fit-content;
	padding: 1.8rem;
	box-shadow: 0 1.4px 0 0 var(--divider-default);

	& h2 {
		color: var(--char-default);
	}
`;
