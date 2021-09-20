import styled from "styled-components";

const AddContentStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > h3 {
		color: var(--char-default);
		margin-bottom: 1rem;
	}

	& > *:last-child {
		margin-top: 0.8rem;
	}
`;

export default AddContentStyle;
