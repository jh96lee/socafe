import styled from "styled-components";

const BorderStyle = styled.div`
	box-shadow: 0px 0 0px 0.8px var(--primary-box-shadow-color);
	height: ${(props) => props.borderHeight};
`;

export default BorderStyle;