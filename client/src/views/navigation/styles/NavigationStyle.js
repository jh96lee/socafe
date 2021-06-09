import styled from "styled-components";

export const NavigationStyle = styled.nav`
	position: sticky;
	top: 85px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--bg-1);
	height: fit-content;
	grid-column: 1 / 2;
	grid-row: 2 / 3;

	& a {
		display: flex;
		align-items: center;
		margin: 1.6rem 0;
		text-decoration: none;
	}

	& a span {
		display: none;
		font-size: 1.43rem;
		color: var(--icon-1);
	}

	& .active > div {
		background-color: var(--bg-4);
	}

	& .active svg {
		fill: var(--icon-1);
	}

	& .active span {
		font-weight: 400;
		color: var(--txt-1);
	}

	@media (max-width: 700px) {
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
