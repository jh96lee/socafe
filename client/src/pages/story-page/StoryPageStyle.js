import styled from "styled-components";

// FIX
export const StoryPageStyle = styled.div`
	position: fixed;
	z-index: 50;
	width: 100vw;
	height: 100vh;
	background-color: var(--bg-1);

	display: grid;
	grid-template-columns: 35rem 1fr;
	gap: 3rem;
`;
