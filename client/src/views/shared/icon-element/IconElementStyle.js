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
	background-color: ${(props) =>
		props.elementBackgroundColor || "var(--icon-default-bg-color)"};
	box-shadow: ${(props) => props.elementBoxShadow};

	& svg {
		color: ${(props) => props.iconColor || "var(--icon-default-color)"};
		fill: ${(props) => props.iconColor || "var(--icon-default-color)"};
		width: ${(props) => props.iconSize || "2.3rem"};
		height: ${(props) => props.iconSize || "2.3rem"};
	}

	&:hover {
		cursor: ${(props) => props.elementCursor || "pointer"};
		background-color: ${(props) =>
			props.elementHoverBackgroundColor ||
			"var(--icon-default-hover-bg-color)"};
	}

	&:hover > svg {
		color: ${(props) => props.iconHoverColor};
		fill: ${(props) => props.iconHoverColor};
	}

	@media (max-width: ${(props) => props.elementBreakingPoint || "350px"}) {
		& svg {
			width: ${(props) => props.iconResponsiveSize || "1.9rem"};
			height: ${(props) => props.iconResponsiveSize || "1.9rem"};
		}
	}
`;

export default IconElementStyle;
