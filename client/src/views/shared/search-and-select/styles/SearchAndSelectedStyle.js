import styled from "styled-components";

export const SearchAndSelectedStyle = styled.div`
	position: relative;
	display: flex;
	gap: 1.2rem;
	align-items: center;
	padding: 0.7rem 1.4rem;
	color: var(--primary-text-color);
	background-color: var(--quaternary-background-color);
	border-radius: 2rem;

	& > svg {
		fill: var(--primary-text-color);
		width: 1rem;
		height: 1rem;
	}

	&:hover {
		cursor: pointer;
		background-color: ${(props) =>
			props.theme.isDarkMode ? "#607d8b29" : "#3c61732b"};
	}
`;
