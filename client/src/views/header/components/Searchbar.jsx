import * as React from "react";
import styled from "styled-components";

const SearchbarStyle = styled.input.attrs(() => ({
	type: "text",
	placeholder: "Search",
}))`
	background-color: var(--bg-2);
	color: var(--txt-1);
	background-color: var(--input-bg-2);
	border: none;
	padding: 1rem 1.5rem;
	border-radius: 0.5rem;
	width: 25rem;
	outline: none;
`;

const Searchbar = () => {
	return <SearchbarStyle type="text" />;
};

export default Searchbar;
