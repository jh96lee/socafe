import styled from "styled-components";

const AddContentHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	height: fit-content;
	padding: 1.8rem;
	box-shadow: 0 1.4px 0 0 var(--divider-default);

	& h2 {
		color: var(--char-default);
	}
`;

export default AddContentHeaderStyle;
