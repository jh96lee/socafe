import React from "react";

import { DropdownElement } from "../index";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import DropdownMenuStyle from "./DropdownMenuStyle";

const DropdownMenu = ({
	triggerID,
	dropdownElementKey,
	dropdownElementArray,
	menuTop,
	menuRight,
	menuBottom,
	menuLeft,
	menuWidth,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	useShowAndHideElementOnClick(triggerID, "dropdown-menu", setIsOpen, true);

	return isOpen ? (
		<DropdownMenuStyle
			id="dropdown-menu"
			menuTop={menuTop}
			menuRight={menuRight}
			menuBottom={menuBottom}
			menuLeft={menuLeft}
			menuWidth={menuWidth}
		>
			{dropdownElementArray.length > 0 ? (
				dropdownElementArray.map(
					({ content, type, onClickEventHandler }, idx) => {
						return (
							<DropdownElement
								key={`${dropdownElementKey}__${idx}`}
								dropdownElementContent={content}
								dropdownElementComponentType={type}
								dropdownElementOnClickEventHandler={onClickEventHandler}
							/>
						);
					}
				)
			) : (
				<p id="dropdown-menu__no-result-message">No search result</p>
			)}
		</DropdownMenuStyle>
	) : null;
};

export default DropdownMenu;
