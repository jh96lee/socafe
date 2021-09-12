import styled from "styled-components";

const DropdownElementTextsStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	&:empty {
		display: none;
	}
`;

export default DropdownElementTextsStyle;
