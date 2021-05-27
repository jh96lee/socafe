import styled from "styled-components";

const AddContentFormStyle = styled.div`
	position: sticky;
	top: 85px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: calc(100vh - 85px);
	box-shadow: 0px 3px 0px 1.7px var(--primary-separator-color);

	/* @media (max-width: 1000px) {
		margin: auto;
		width: 60%;
	} */
`;

export default AddContentFormStyle;