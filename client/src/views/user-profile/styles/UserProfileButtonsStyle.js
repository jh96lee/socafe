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
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#121212" : "#f9f9f9"};
	border: none;
	border-radius: 0.5rem;
	box-shadow: 0 0 0 1.6px var(--separator-2);

	& > svg {
		fill: var(--icon-2);
		margin: auto;
		width: 2.3rem;
		height: 2.3rem;
	}

	&:hover {
		background-color: var(--bg-hover-1);
		cursor: pointer;
	}
`;
