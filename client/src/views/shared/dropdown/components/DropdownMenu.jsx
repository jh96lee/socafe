import * as React from "react";

import DropdownCategoryElement from "./DropdownCategoryElement";

import { DropdownMenuStyle } from "../styles/DropdownMenuStyle";

const DropdownMenu = ({
	dropdownMenuID,
	dropdownElementsArray,
	dropdownElementType,
	dropdownElementOnClickEventHandler,
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
								dropdownElementOnClickEventHandler={
									dropdownElementOnClickEventHandler
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
