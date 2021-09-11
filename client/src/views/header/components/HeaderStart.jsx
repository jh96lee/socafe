import * as React from "react";
import { useDispatch } from "react-redux";

import { Logo, Icon } from "../../shared";

import { setIsResponsiveNavigationOpen } from "../../../redux/user-interface/userInterfaceAction";

import { HeaderStartStyle } from "../styles/HeaderStartStyle";

import { Hamburger } from "../../../assets";

const HeaderStart = () => {
	const dispatch = useDispatch();

	const handleHamburgerOnClick = () => {
		dispatch(setIsResponsiveNavigationOpen());
	};

	return (
		<HeaderStartStyle>
			<Icon
				iconRole="button"
				iconType="button"
				iconOnClick={handleHamburgerOnClick}
			>
				<Hamburger />
			</Icon>

			<Logo />
		</HeaderStartStyle>
	);
};

export default HeaderStart;
