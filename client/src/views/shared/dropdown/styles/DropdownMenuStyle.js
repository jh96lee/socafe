import styled from "styled-components";

export const DropdownMenuStyle = styled.div`
	position: absolute;
	top: ${(props) => props.menuTop};
	right: ${(props) => props.menuRight};
	bottom: ${(props) => props.menuBottom};
	left: ${(props) => props.menuLeft};
	z-index: 100;
	width: ${(props) => props.menuWidth || "fit-content"};
	transform: ${(props) => props.menuTransform};
	box-shadow: 0 0px 0px 1.6px var(--separator-1);
	background-color: var(--bg-1);
	padding: 1rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	height: fit-content;
	overflow: scroll;

	& > *:not(:last-child) {
		margin-bottom: 0.7rem;
	}

	& #dropdown-menu__no-result-message {
		padding: 1rem;
		color: var(--text-1);
	}
`;
