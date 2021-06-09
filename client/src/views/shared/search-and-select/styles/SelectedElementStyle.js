import styled from "styled-components";

export const SelectedElementStyle = styled.div`
	position: relative;
	display: flex;
	gap: 1.2rem;
	align-items: center;
	padding: 0.7rem 1.4rem;
	color: var(--txt-1);
	background-color: var(--bg-4);
	border-radius: 2rem;

	& > p {
		font-size: ${(props) => props.selectedElementFontSize};
	}

	& > svg {
		fill: var(--icon-2);
		width: 1rem;
		height: 1rem;
	}

	&:hover {
		cursor: pointer;
		background-color: ${(props) =>
			props.theme.isDarkMode ? "#607d8b29" : "#3c61732b"};
	}
`;
