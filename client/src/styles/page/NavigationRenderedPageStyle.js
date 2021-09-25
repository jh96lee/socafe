import styled from "styled-components";

const NavigationRenderedPageStyle = styled.div`
	position: relative;
	background-color: var(--bg-default);
	min-width: 100%;
	min-height: calc(100vh - 8rem);
	grid-row: 2 / 3;
	grid-column: 2 / 3;

	@media (max-width: 1350px) {
		grid-column: 1 / 3;
	}
`;

export default NavigationRenderedPageStyle;
