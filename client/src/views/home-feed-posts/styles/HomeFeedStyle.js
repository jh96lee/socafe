import styled from "styled-components";

export const HomeFeedStyle = styled.div`
	display: grid;
	grid-template-columns: 58rem;
	gap: 3rem 2rem;
	margin: auto;
	justify-content: center;
	width: fit-content;

	/* FIX */
	& button {
		position: relative;
		font-size: 1.45rem;
		font-weight: 500;
		letter-spacing: -0.4px;
		outline: none;
		border: none;
		border-radius: 0.5rem;
		padding: 1.4rem 0;
		color: var(--text-1);
		background-color: transparent;
		border: 2px solid var(--separator-2);
		width: 50%;
		margin: auto;
	}

	& button:hover {
		cursor: pointer;
		background-color: var(--secondary-element-hover-bg-color);
	}
`;
