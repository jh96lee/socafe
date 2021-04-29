import styled from "styled-components";

const DropdownMenuStyle = styled.div`
	position: absolute;
	top: ${(props) => (props.menuTop ? props.menuTop : "105%")};
	right: ${(props) => props.menuPosition === "right" && "0"};
	left: ${(props) => props.menuPosition === "left" && "0"};
	text-align: left;
	background-color: var(--primary-background-color);
	box-shadow: 0px 0px 3px 0px var(--primary-box-shadow-color);
	padding: 1.3rem 2rem;
	/* min-width: 18rem; */
	width: fit-content;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;

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
