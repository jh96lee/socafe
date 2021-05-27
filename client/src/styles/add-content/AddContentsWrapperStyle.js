import styled from "styled-components";

const AddContentsWrapperStyle = styled.div`
	padding: 1.5rem 1.2rem;
	overflow: scroll;

	& > *:first-child {
		margin-top: 0.5rem;
	}

	& > *:not(:last-child) {
		margin-bottom: 3rem;
	}
`;

export default AddContentsWrapperStyle;
