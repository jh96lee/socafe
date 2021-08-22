import styled from "styled-components";

export const StorySidebarStyle = styled.div`
	display: grid;
	grid-template-rows: min-content 1fr;
	min-height: 100%;
	max-height: 100vh;
	box-shadow: 0 0 0 1.4px var(--separator-1);
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
