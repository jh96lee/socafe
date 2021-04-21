import * as React from "react";
import styled from "styled-components";

import { IoSearchOutline } from "react-icons/io5";

const SearchbarStyle = styled.div`
	position: relative;

	& svg {
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
		width: 2rem;
		height: 2rem;
		fill: var(--secondary-icon-color);
		color: var(--secondary-icon-color);
	}
`;

const SearchbarInputStyle = styled.input.attrs((props) => ({
	type: "text",
	placeholder: "Search",
}))`
	color: var(--txt-1);
	background-color: var(--secondary-background-color);
	padding: 1rem;
	border: 1px solid var(--primary-border-color);
	border-radius: 0.5rem;
	width: 25rem;
	outline: none;

	&::placeholder {
		font-size: 1.37rem;
		letter-spacing: -0.6px;
	}
`;

const Searchbar = () => {
	return (
		<SearchbarStyle>
			<SearchbarInputStyle type="text" />

			<IoSearchOutline />
		</SearchbarStyle>
	);
};

export default Searchbar;
