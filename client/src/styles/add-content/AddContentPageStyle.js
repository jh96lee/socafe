import styled from "styled-components";
import { PageStyle } from "../../styles";

const AddContentPageStyle = styled(PageStyle)`
	display: grid;
	grid-template-columns: 30rem auto;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

export default AddContentPageStyle;
