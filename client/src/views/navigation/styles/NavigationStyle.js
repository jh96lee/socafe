import styled from "styled-components";

export const NavigationStyle = styled.nav`
	position: sticky;
	top: 8rem;
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 3rem;
	background-color: var(--bg-default);
	width: ${(props) => (props.isNavigationAtHome ? "35rem" : "28rem")};
	height: fit-content;

	& > *:first-child {
		display: none;
	}

	& > *:nth-child(2) {
		margin-bottom: -3px;
	}

	& > a {
		display: flex;
		align-items: center;
		gap: 1.5rem;

		& > p {
			color: var(--char-2);
			font-size: 1.45rem;
			font-weight: 500;
		}

		& > svg {
			width: 3.3rem;
			height: 3.3rem;
		}

		&:hover > p {
			text-decoration: underline;
		}
	}

	& > .active {
		& > p {
			color: var(--char-default);
		}
	}

	@media (max-width: 1350px) {
		position: fixed;
		top: 8rem;
		left: 0;
		z-index: 15;
		display: ${(props) => (props.isResponsiveNavigationOpen ? "flex" : "none")};
		background-color: var(--bg-1);
		width: 35rem;
		min-height: 100vh;
		box-shadow: 1.6px 1.6px 3px 0 var(--divider-default);

		& > *:first-child {
			display: block;
		}
	}

	@media (max-width: 500px) {
		width: 100vw;
	}
`;
