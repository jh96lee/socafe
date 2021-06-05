import styled from "styled-components";

const BorderStyle = styled.div`
	box-shadow: 0px 0 0px 0.8px var(--separator-1);
	height: ${(props) => props.borderHeight};
	width: 0;
`;

export default BorderStyle;
