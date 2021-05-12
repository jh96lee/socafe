import React from "react";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import DropdownMenuStyle from "./DropdownMenuStyle";

const DropdownMenu = ({
	triggerID,
	children,
	dataArray,
	menuTop,
	menuRight,
	menuBottom,
	menuLeft,
	menuWidth,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	useShowAndHideElementOnClick(triggerID, "dropdown", setIsOpen, true);

	return isOpen ? (
		<DropdownMenuStyle
			id="dropdown"
			menuTop={menuTop}
			menuRight={menuRight}
			menuBottom={menuBottom}
			menuLeft={menuLeft}
			menuWidth={menuWidth}
		>
			{dataArray.length > 0 ? (
				children
			) : (
				<p id="dropdown-menu__no-result-message">No search result</p>
			)}
		</DropdownMenuStyle>
	) : null;
};

export default DropdownMenu;
