import styled from "styled-components";

const IconElementStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: ${(props) => props.elementPadding || "0.8rem"};
	outline: none;
	border: none;
	border-radius: 50%;
	background-color: ${(props) => props.elementBackgroundColor || "transparent"};

	& svg {
		color: ${(props) => props.iconColor || "var(--primary-icon-color)"};
		fill: ${(props) => props.iconColor || "var(--primary-icon-color)"};
		width: ${(props) => props.iconSize || "2.3rem"};
		height: ${(props) => props.iconSize || "2.3rem"};
	}

	&:hover {
		cursor: pointer;
		background-color: ${(props) =>
			props.elementHoverBackgroundColor ||
			"var(--secondary-hover-clickable-background-color)"};
	}

	&:hover > svg {
		color: ${(props) =>
			props.iconHoverColor || "var(--primary-hover-icon-color)"};
		fill: ${(props) =>
			props.iconHoverColor || "var(--primary-hover-icon-color)"};
	}

	@media (max-width: ${(props) => props.elementBreakingPoint}) {
		& svg {
			width: ${(props) => props.iconResponsiveSize};
			height: ${(props) => props.iconResponsiveSize};
		}
	}
`;

export default IconElementStyle;
