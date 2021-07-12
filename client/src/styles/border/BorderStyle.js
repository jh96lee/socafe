import styled from "styled-components";

const BorderStyle = styled.div`
	display: block;
	background-color: var(--separator-1);
	height: ${(props) => props.borderHeight};
	width: ${(props) => props.borderWidth};
	box-shadow: 0 0 0 ${(props) => props.boxShadowWidth} var(--separator-1);
`;

export default BorderStyle;
