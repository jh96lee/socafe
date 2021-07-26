import styled from "styled-components";

export const MainPostRightStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content 1fr min-content;

	@media (max-width: 1150px) {
		border: 1px solid var(--input-default-separator-color);
	}
`;

export const MainPostRightHeaderStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 2.5rem;
	box-shadow: 0 1px 0 0 var(--input-default-separator-color);

	@media (max-width: 1150px) {
		padding: 1.4rem 2.5rem;
	}
`;

export const MainPostRightBodyStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.7rem 4rem;
	overflow: scroll;

	& > *:first-child {
		margin-bottom: 0.7rem;
	}

	& > *:last-child {
		margin-top: 3rem;
	}
`;
