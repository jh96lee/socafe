import styled from "styled-components";

const BorderStyle = styled.div`
	display: block;
	background-color: var(--divider-default);
	height: ${(props) => props.borderHeight};
	width: ${(props) => props.borderWidth};
	box-shadow: 0 0 0 ${(props) => props.boxShadowWidth} var(--divider-default);
`;

export default BorderStyle;
