import styled from "styled-components";

import { ButtonStyle } from "../../../styles";

const CategoriesOfInterestButtonStyle = styled(ButtonStyle)`
	background-color: var(--primary-button-background-color);
	color: ${(props) => (props.success ? "var(--txt-success)" : "#ffffff")};
	width: 20rem;
	margin: auto;
`;

export default CategoriesOfInterestButtonStyle;
