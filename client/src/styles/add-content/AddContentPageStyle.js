import styled from "styled-components";
import { PageStyle } from "../../styles";

const AddContentPageStyle = styled(PageStyle)`
	display: flex;
	display: grid;
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	grid-template-columns: 35rem auto;
	grid-template-rows: auto;
	max-height: 100vh;
	min-height: 100vh;

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
		justify-content: center;

		& > *:first-child {
			width: 50rem;
		}

		& > *:last-child {
			display: none;
		}
	}

	@media (max-width: 500px) {
		& > * {
			width: 100%;
		}
	}
`;

export default AddContentPageStyle;
