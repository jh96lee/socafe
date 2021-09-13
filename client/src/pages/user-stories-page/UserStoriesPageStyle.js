import styled from "styled-components";

export const UserStoriesPageStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	min-height: calc(100vh - 8rem);
	padding: 3rem 0;
	margin: auto;
	width: 80%;

	& > h1 {
		color: var(--text-1);
	}

	& button {
		font-size: 1.37rem;
		font-weight: 500;
		letter-spacing: -0.4px;
		outline: none;
		border-radius: 0.5rem;
		padding: 1.3rem 0;
		color: var(--text-1);
		background-color: transparent;
		border: 1px solid var(--separator-2);
		width: 30rem;
		margin: 2rem auto;
	}

	& button:hover {
		cursor: pointer;
		background-color: var(--secondary-element-hover-bg-color);
	}

	@media (max-width: 700px) {
		grid-column: 1 / 3;
		width: 90%;
	}
`;
