import styled from "styled-components";

const PageStyle = styled.div`
	position: relative;
	min-width: 100%;
	grid-row: 2 / 3;
	grid-column: 2 / 3;

	@media (max-width: 700px) {
		grid-column: 1 / 3;
	}
`;

export default PageStyle;
