import styled from "styled-components";

export const SelectedContentStyle = styled.div`
	position: relative;
	display: flex;
	gap: 1.2rem;
	align-items: center;
	padding: 0.7rem 1.4rem;
	color: var(--char-blue-1);
	background-color: var(--bg-blue-1);
	border-radius: 1rem;

	& > p {
		font-size: ${(props) => props.selectedElementFontSize};
		font-weight: 500;
	}

	& > svg {
		fill: var(--char-blue-1);
		width: 1rem;
		height: 1rem;
	}

	&:hover {
		cursor: pointer;
		background-color: var(--secondary-element-hover-bg-color);
	}
`;
