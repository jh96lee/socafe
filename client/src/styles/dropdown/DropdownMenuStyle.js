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
	min-width: fit-content;
	min-height: fit-content;
	border-radius: 0.5rem;
	box-shadow: 0 0 3px 1px var(--divider-default);

	& > div {
		padding: 0.7rem;
		border-radius: 0.5rem;
	}

	& p {
		color: var(--char-default);
	}

	/* REVIEW: this is to target Nothing here p tag message */
	& > p {
		padding: 1.4rem;
	}

	& span {
		font-weight: 500;
	}

	& > *:hover {
		cursor: pointer;
		background-color: var(--bg-1-hover);
	}
`;

export default DropdownMenuStyle;
