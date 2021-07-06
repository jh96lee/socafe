import styled from "styled-components";
import { PageStyle } from "../../styles";

const AddContentPageStyle = styled(PageStyle)`
	display: grid;
	grid-column: 1 / 3;
	grid-row: 1 / 3;
	grid-template-columns: 35rem auto;
	grid-template-rows: auto;
	max-height: 100vh;
	min-height: 100vh;
`;

export default AddContentPageStyle;
