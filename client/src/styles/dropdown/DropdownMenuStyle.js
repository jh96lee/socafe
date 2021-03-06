import styled from "styled-components";

const DropdownMenuStyle = styled.div`
	position: absolute;
	top: ${(props) => props.menuTop};
	right: ${(props) => props.menuRight};
	bottom: ${(props) => props.menuBottom};
	left: ${(props) => props.menuLeft};
	transform: ${(props) => props.menuTransform};
	z-index: 15;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	background-color: var(--bg-1);
	padding: 0.5rem;
	width: ${(props) => props.menuWidth || "120%"};
	max-height: 30rem;
	min-width: fit-content;
	min-height: fit-content;
	border-radius: 0.5rem;
	box-shadow: 0 0 3px 1px var(--divider-default);
	overflow: scroll;

	/* REVIEW: this is to target Nothing here p tag message */
	& > p {
		color: var(--char-1);
		padding: 1.4rem;
	}
`;

export default DropdownMenuStyle;
