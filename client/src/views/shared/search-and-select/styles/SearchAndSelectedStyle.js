import styled from "styled-components";

export const SearchAndSelectedStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding: 1.5rem;
	position: relative;
	border: none;
	border-radius: 0.5rem;
	outline: none;
	background-color: transparent;
	font-size: 1.4rem;
	color: var(--primary-text-color);

	&:empty {
		display: none;
	}
`;
