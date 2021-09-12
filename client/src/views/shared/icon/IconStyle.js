import styled from "styled-components";

export const IconStyle = styled.div`
	position: ${(props) => props.iconPosition};
	top: ${(props) => props.iconTop};
	right: ${(props) => props.iconRight};
	bottom: ${(props) => props.iconBottom};
	left: ${(props) => props.iconLeft};
	z-index: ${(props) => props.iconZIndex};
	transform: ${(props) => props.iconTransform};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${(props) => props.iconPadding || "0.7rem"};
	outline: none;
	border: ${(props) => props.iconBorder};
	border-radius: 50%;
	background-color: ${(props) => props.iconBGColor || "var(--bg-icon)"};
	box-shadow: ${(props) => props.iconBoxShadow};
	width: ${(props) => props.iconDimension || "fit-content"};
	height: ${(props) => props.iconDimension || "fit-content"};

	& svg {
		color: ${(props) => props.iconFill || "var(--char-default)"};
		fill: ${(props) => props.iconFill || "var(--char-default)"};
		width: ${(props) => props.iconSize || "2.2rem"};
		height: ${(props) => props.iconSize || "2.2rem"};
	}

	&:hover {
		cursor: pointer;
		background-color: ${(props) =>
			props.iconBGHoverColor || "var(--bg-icon-hover)"};
	}

	&:hover > svg {
		color: ${(props) => props.iconHoverFill};
		fill: ${(props) => props.iconHoverFill};
	}
`;
