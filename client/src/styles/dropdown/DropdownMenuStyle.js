import styled from "styled-components";

const DropdownMenuStyle = styled.div`
	position: absolute;
	top: ${(props) => props.menuTop};
	right: ${(props) => props.menuRight};
	bottom: ${(props) => props.menuBottom};
	left: ${(props) => props.menuLeft};
	z-index: 15;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	background-color: var(--bg-1);
	padding: 0.5rem;
	width: 120%;
	min-width: fit-content;
	min-height: fit-content;
	border-radius: 0.5rem;
	box-shadow: 0 0 0 1.6px var(--border-default);

	& > p {
		color: var(--char-1);
		padding: 1rem;
		border-radius: 0.5rem;
	}

	& > p:hover {
		cursor: pointer;
		background-color: var(--bg-1-hover);
	}
`;

export default DropdownMenuStyle;
