import styled from "styled-components";

const DropdownMenuStyle = styled.div`
	position: absolute;
	top: ${(props) => props.menuTop};
	right: ${(props) => props.menuRight};
	bottom: ${(props) => props.menuBottom};
	left: ${(props) => props.menuLeft};
	background-color: var(--primary-background-color);
	box-shadow: 0px 0px 0px 2px var(--primary-box-shadow-color);
	padding: 1.3rem 2rem;
	width: ${(props) => (props.menuWidth ? props.menuWidth : "fit-content")};
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;

	& > *:not(:last-child) {
		margin-bottom: 1rem;
	}

	& a,
	p {
		color: var(--primary-text-color);
	}

	& a {
		font-size: 1.4rem;
		text-decoration: none;
		cursor: pointer;
	}

	& p {
		cursor: pointer;
	}
`;

export default DropdownMenuStyle;
