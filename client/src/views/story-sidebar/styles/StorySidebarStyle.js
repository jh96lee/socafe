import styled from "styled-components";

export const StorySidebarStyle = styled.div`
	display: grid;
	grid-template-rows: min-content 1fr;
	min-height: 100%;
	max-height: 100vh;
	box-shadow: 0 0 0 1.4px var(--separator-1);

	& button {
		position: relative;
		font-size: 1.4rem;
		font-weight: 500;
		letter-spacing: -0.4px;
		outline: none;
		border: none;
		border-radius: 0.5rem;
		padding: 1.4rem 0;
		color: var(--text-1);
		background-color: transparent;
		border: 2px solid var(--separator-2);
		margin-top: 0.6rem;
	}
`;

export const StorySidebarHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	height: fit-content;
	padding: 1.8rem;
	box-shadow: 0 1.4px 0 0 var(--separator-1);

	& h2 {
		color: var(--text-1);
	}
`;
