import styled from "styled-components";

export const UserProfileButtonsStyle = styled.div`
	display: grid;
	grid-template-columns: ${(props) =>
		props.profileOwnerVisited ? "12rem 4rem 4rem" : "12rem 4rem"};
	grid-auto-rows: 4rem;
	justify-content: flex-end;
	gap: 1rem;
	padding-top: 1rem;
`;

export const UserProfileButtonStyle = styled.button`
	background-color: transparent;
	border: none;
	border-radius: 0.5rem;
	box-shadow: 0 0 0 1px var(--icon-2);

	& > svg {
		fill: var(--icon-2);
		margin: auto;
		width: 1.8rem;
		height: 1.8rem;
	}

	&:hover {
		background-color: var(--bg-hover-1);
		cursor: pointer;
	}
`;
