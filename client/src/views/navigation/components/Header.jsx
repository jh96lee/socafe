import * as React from "react";
import styled from "styled-components";

import Searchbar from "./Searchbar";

import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";

const HeaderStyle = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-column: 2 / 3;
	grid-row: 1 / 2;
`;

const HeaderSVGWrapperStyle = styled.div`
	display: flex;
	align-items: center;

	& a {
		background: -webkit-linear-gradient(to right, #dd2476, #ff512f);
		background: linear-gradient(to right, #dd2476, #ff512f);
		padding: 0.4rem 0.5rem;
		border-radius: 0.5rem;
	}

	& svg {
		display: block;
		width: 2.35rem;
		height: 2.35rem;
	}
`;

const Header = () => {
	return (
		<HeaderStyle>
			<Searchbar />

			<HeaderSVGWrapperStyle>
				<IoPaperPlaneOutline />

				<RiShoppingCartLine />

				<BsPerson />
			</HeaderSVGWrapperStyle>
		</HeaderStyle>
	);
};

export default Header;
