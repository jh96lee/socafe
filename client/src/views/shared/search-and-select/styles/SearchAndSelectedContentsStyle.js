import styled from "styled-components";

export const SearchAndSelectedContentsStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding: ${(props) => props.searchAndSelectedElementsPadding || "1.5rem"};
	position: relative;
	border: none;
	border-radius: 0.5rem;
	outline: none;
	background-color: transparent;

	&:empty {
		display: none;
	}
`;
