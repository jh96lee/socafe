import styled from "styled-components";

export const SelectedContentStyle = styled.div`
	position: relative;
	display: flex;
	gap: 1rem;
	align-items: center;
	padding: 1rem 1.2rem;
	color: var(--char-blue-1);
	background-color: var(--bg-blue-1);
	border-radius: 1rem;

	& > p {
		font-size: ${(props) => props.selectedElementFontSize};
		font-weight: 500;
	}

	&:hover {
		cursor: pointer;
	}
`;
