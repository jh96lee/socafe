import styled from "styled-components";

export const StorySidebarUserStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.8rem 1rem;
	border-radius: 1rem;

	& > p {
		color: var(--char-default);
		font-size: 1.4rem;
	}

	&:hover {
		cursor: pointer;
		background-color: #4664721a;
	}
`;
