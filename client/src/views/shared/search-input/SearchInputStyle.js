import styled from "styled-components";

export const SearchInputStyle = styled.input.attrs((props) => ({
	type: "text",
	placeholder: props.placeholder,
}))`
	color: var(--primary-text-color);
	padding: 1.5rem;
	outline: none;
	border: none;
	border-radius: 0.5rem;
	width: 100%;
	background-color: transparent;
`;
