import styled from "styled-components";
import { PageStyle } from "../../styles";

const AddContentPageStyle = styled(PageStyle)`
	display: grid;
	grid-template-columns: 30rem auto;

	/* REVIEW: display none the PostPreview component and only display the add post form */
	@media (max-width: 900px) {
		grid-template-columns: 28rem auto;
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

export default AddContentPageStyle;
