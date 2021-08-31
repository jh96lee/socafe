import styled from "styled-components";

// FIX: add responsiveness
export const UserStoriesStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 2rem;

	& > * {
		justify-self: center;
	}
`;
