import styled from "styled-components";

export const NavigationStyle = styled.nav`
	position: sticky;
	top: 78px;
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	padding-top: 3rem;
	background-color: var(--bg-1);
	height: fit-content;

	& > a > span {
		display: none;
	}

	& #filled {
		display: none;
	}

	& .active div {
		background-color: var(--icon-active-link-bg-color);
	}

	& .active #filled {
		display: block;
		fill: var(--icon-active-link-color);
	}

	& .active #outline {
		display: none;
	}

	@media (max-width: 700px) {
		position: absolute;
		top: 78px;
		display: ${(props) => (props.isResponsiveNavigationOpen ? "flex" : "none")};
		align-items: flex-start;
		padding: 3rem;
		width: 100%;
		height: calc(100vh - 78px);
		z-index: 100;
		background-color: var(--bg-1);

		& > a {
			display: flex;
			align-items: center;
			gap: 1.5rem;
			text-decoration: none;
		}

		& > a > span {
			display: inline-block;
			color: var(--text-1);
			font-size: 1.5rem;
			font-weight: 400;
		}

		& .active span {
			font-weight: 500;
			color: var(--icon-active-link-color);
		}
	}
`;
