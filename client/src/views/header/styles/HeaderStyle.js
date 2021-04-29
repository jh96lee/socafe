import styled from "styled-components";

export const HeaderStyle = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-column: 1 / 3;
	grid-row: 1 / 2;
	box-shadow: 0px 1px 3px 0px var(--primary-box-shadow-color);
	padding: 0 2rem;

	@media (max-width: 615px) {
		display: grid;
		grid-template-columns: 1fr auto auto;
	}
`;

export const HeaderIconsWrapperStyle = styled.div`
	display: flex;
	align-items: center;

	& > *:not(:first-child) {
		margin-left: 0.5rem;
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
