import React from "react";

import { DropdownElement } from "../index";

import DropdownMenuStyle from "./DropdownMenuStyle";

const DropdownMenu = ({
	dropdownMenuID,
	dropdownElementKey,
	dropdownElementArray,
	dropdownMenuStyleObject,
}) => {
	return (
		<DropdownMenuStyle id={dropdownMenuID} {...dropdownMenuStyleObject}>
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
	);
};

export default DropdownMenu;
