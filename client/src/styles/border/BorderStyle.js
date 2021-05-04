import styled from "styled-components";

const BorderStyle = styled.div`
	border-left: 1px solid var(--primary-box-shadow-color);
	height: ${(props) => props.borderHeight};
`;

export default BorderStyle;
