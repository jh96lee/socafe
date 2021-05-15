import styled from "styled-components";

export const SearchAndSelectedValueStyle = styled.div`
	position: relative;
	display: flex;
	gap: 1.2rem;
	align-items: center;
	padding: 0.7rem 1.4rem;
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#4f606961" : "#6096b12b"};
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
