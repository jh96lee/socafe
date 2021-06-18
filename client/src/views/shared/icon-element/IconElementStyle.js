import styled from "styled-components";

const IconElementStyle = styled.div`
	position: ${(props) => props.elementPosition || "relative"};
	top: ${(props) => props.elementTop};
	right: ${(props) => props.elementRight};
	bottom: ${(props) => props.elementBottom};
	left: ${(props) => props.elementLeft};
	z-index: ${(props) => props.elementZIndex};
	transform: ${(props) => props.elementTransform};
	display: flex;
	align-items: center;
	padding: ${(props) => props.elementPadding || "0.8rem"};
	outline: none;
	border: none;
	border-radius: 50%;
	background-color: ${(props) => props.elementBackgroundColor || "transparent"};
	box-shadow: ${(props) => props.elementBoxShadow};

	& svg {
		color: ${(props) => props.iconColor || "var(--icon-1)"};
		fill: ${(props) => props.iconColor || "var(--icon-1)"};
		width: ${(props) => props.iconSize || "2.3rem"};
		height: ${(props) => props.iconSize || "2.3rem"};
	}

	&:hover {
		cursor: ${(props) => props.elementCursor || "pointer"};
		background-color: ${(props) =>
			props.elementHoverBackgroundColor || "var(--bg-hover-1)"};
	}

	&:hover > svg {
		color: ${(props) => props.iconHoverColor || "var(--icon-hover-1)"};
		fill: ${(props) => props.iconHoverColor || "var(--icon-hover-1)"};
	}

	@media (max-width: ${(props) => props.elementBreakingPoint || "350px"}) {
		& svg {
			width: ${(props) => props.iconResponsiveSize || "1.9rem"};
			height: ${(props) => props.iconResponsiveSize || "1.9rem"};
		}
	}
`;

export default IconElementStyle;
