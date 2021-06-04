import styled from "styled-components";

const DropdownMenuStyle = styled.div`
	position: absolute;
	top: ${(props) => props.menuTop};
	right: ${(props) => props.menuRight};
	bottom: ${(props) => props.menuBottom};
	left: ${(props) => props.menuLeft};
	z-index: 100;
	width: ${(props) => props.menuWidth || "fit-content"};
	box-shadow: 0 0 0 1.6px var(--primary-separator-color);
	background-color: var(--primary-background-color);
	padding: 0.7rem;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	max-height: 30rem;
	overflow: scroll;

	& > *:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	& #dropdown-menu__no-result-message {
		padding: 1rem;
		color: var(--primary-text-color);
	}
`;

export default DropdownMenuStyle;
