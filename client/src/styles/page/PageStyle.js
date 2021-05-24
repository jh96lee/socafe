import styled from "styled-components";

const PageStyle = styled.div`
	min-width: 100%;
	min-height: 100vh;
	grid-column: 2 / 3;

	@media (max-width: 600px) {
		grid-column: 1 / 3;
	}
`;

export default PageStyle;
