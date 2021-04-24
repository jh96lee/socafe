import styled from "styled-components";

export const HeaderStyle = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-column: 1 / 3;
	grid-row: 1 / 2;
	box-shadow: 0px 1px 3px 0px var(--primary-box-shadow-color);
	padding: 0 2rem;

	& > svg:first-child {
		display: none;
	}
`;

export const HeaderIconsWrapperStyle = styled.div`
	display: flex;
	align-items: center;

	& svg:not(:first-child) {
		color: var(--primary-icon-color);
		width: 2.52rem;
		height: 2.52rem;
		margin: 0.3rem;
	}

	& #search-icon-element {
		display: none;
	}

	@media (max-width: 615px) {
		& #search-icon-element {
			display: block;
		}
	}
`;
