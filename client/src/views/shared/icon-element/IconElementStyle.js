import styled from "styled-components";

const IconElementStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 0.8rem;
	outline: none;
	border: none;
	border-radius: 50%;
	background-color: ${(props) =>
		props.iconLevel === "primary"
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
		cursor: pointer;
		background-color: ${(props) =>
			props.iconLevel === "primary"
				? "var(--primary-hover-clickable-background-color)"
				: "var(--secondary-hover-clickable-background-color)"};
	}

	@media (max-width: ${(props) => props.iconBreakingPoint}) {
		& svg {
			width: ${(props) => props.iconResponsiveSize};
			height: ${(props) => props.iconResponsiveSize};
			/* width: 1rem;
			height: 1rem; */
		}
	}
`;

export default IconElementStyle;
