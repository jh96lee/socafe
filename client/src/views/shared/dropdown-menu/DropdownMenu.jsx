import React from "react";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import DropdownMenuStyle from "./DropdownMenuStyle";

const DropdownMenu = ({
	triggerID,
	dataArray,
	customDropdownId,
	menuPosition,
	menuTop,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	useShowAndHideElementOnClick(triggerID, "dropdown", setIsOpen, true);

	return isOpen && dataArray.length > 0 ? (
		<DropdownMenuStyle
			id="dropdown"
			menuPosition={menuPosition}
			menuTop={menuTop}
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
