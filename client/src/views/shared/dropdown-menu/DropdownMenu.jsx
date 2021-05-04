import React from "react";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import DropdownMenuStyle from "./DropdownMenuStyle";

const DropdownMenu = ({
	triggerID,
	dataArray,
	customDropdownId,
	menuTop,
	menuRight,
	menuBottom,
	menuLeft,
	menuWidth,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	useShowAndHideElementOnClick(triggerID, "dropdown", setIsOpen, true);

	return isOpen && dataArray.length > 0 ? (
		<DropdownMenuStyle
			id="dropdown"
			menuTop={menuTop}
			menuRight={menuRight}
			menuBottom={menuBottom}
			menuLeft={menuLeft}
			menuWidth={menuWidth}
		>
			{dataArray.map((element, idx) => {
				return (
					<React.Fragment key={`${customDropdownId}__${idx}`}>
						{element}
					</React.Fragment>
				);
			})}
		</DropdownMenuStyle>
	) : null;
};

export default DropdownMenu;
