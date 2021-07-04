import * as React from "react";

import { DropdownCategoryElement, DropdownUserElement } from "../index";

import { DropdownMenuStyle } from "../styles/DropdownMenuStyle";

const DropdownMenu = ({
	dropdownMenuID,
	dropdownElementsArray,
	dropdownElementType,
	dropdownElementOnClickEventLogic,
	dropdownMenuStyleObject,
}) => {
	return (
		<DropdownMenuStyle id={dropdownMenuID} {...dropdownMenuStyleObject}>
			{dropdownElementsArray.length > 0 ? (
				dropdownElementsArray.map((result, idx) => {
					if (dropdownElementType === "category") {
						return (
							<DropdownCategoryElement
								key={`${dropdownMenuID}__${idx}`}
								dropdownElement={result}
								dropdownElementOnClickEventLogic={
									dropdownElementOnClickEventLogic
								}
							/>
						);
					} else if (dropdownElementType === "user") {
						return (
							<DropdownUserElement
								key={`${dropdownMenuID}__${idx}`}
								dropdownElement={result}
								dropdownElementOnClickEventLogic={
									dropdownElementOnClickEventLogic
								}
							/>
						);
					}
				})
			) : (
				<p id="dropdown-menu__no-result-message">No Search Result</p>
			)}
		</DropdownMenuStyle>
	);
};

export default DropdownMenu;
