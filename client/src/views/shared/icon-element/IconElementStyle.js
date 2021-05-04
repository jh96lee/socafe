import styled from "styled-components";

const IconElementStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: ${(props) =>
		props.iconUsage === "search" || props.iconUsage === "contentinfo"
			? "0.8rem"
			: "0"};
	outline: none;
	border: none;
	border-radius: 50%;
	background-color: ${(props) =>
		props.iconUsage === "search"
			? "var(--primary-clickable-background-color)"
			: "transparent"};

	& svg {
		color: ${(props) =>
			props.iconColor ? props.iconColor : "var(--primary-icon-color)"};
		fill: ${(props) =>
			props.iconColor ? props.iconColor : "var(--primary-icon-color)"};
		width: ${(props) => props.iconSize};
		height: ${(props) => props.iconSize};
	}

	&:hover {
		cursor: ${(props) =>
			props.iconUsage === "search" ||
			props.iconUsage === "button" ||
			props.iconUsage === "contentinfo"
				? "pointer"
				: "auto"};
		background-color: ${(props) =>
			props.iconUsage === "search"
				? "var(--primary-hover-clickable-background-color)"
				: props.iconUsage === "contentinfo"
				? "var(--secondary-hover-clickable-background-color)"
				: "none"};
	}

	&:hover > svg {
		color: ${(props) => props.iconUsage === "button" && "#fff"};
		fill: ${(props) => props.iconUsage === "button" && "#fff"};
	}

	@media (max-width: ${(props) => props.iconBreakingPoint}) {
		& svg {
			width: ${(props) => props.iconResponsiveSize};
			height: ${(props) => props.iconResponsiveSize};
		}
	}
`;

export default IconElementStyle;
