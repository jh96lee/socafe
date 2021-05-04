import styled from "styled-components";

export const NavigationStyle = styled.nav`
	position: sticky;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--primary-background-color);
	min-height: calc(100vh - 79.69px);
	box-shadow: 0px 3px 0px 1px var(--primary-box-shadow-color);
	grid-column: 1 / 2;
	grid-row: 2 / 3;

	& a {
		display: flex;
		align-items: center;
		margin: 1.3rem 0;
		text-decoration: none;
	}

	& a span {
		display: none;
		font-size: 1.47rem;
		color: var(--primary-icon-color);
	}

	& .active svg {
		fill: ${(props) => (props.theme.isDarkMode ? "#fff" : "#000")};
	}

	& .active span {
		color: ${(props) => (props.theme.isDarkMode ? "#fff" : "#000")};
	}

	@media (max-width: 600px) {
		position: absolute;
		top: 82px;
		display: ${(props) => (props.isResponsiveNavigationOpen ? "flex" : "none")};
		align-items: flex-start;
		padding: 0 2rem;
		width: 100%;
		z-index: 100;

		& a span {
			display: block;
			margin-left: 0.5rem;
		}
	}
`;
