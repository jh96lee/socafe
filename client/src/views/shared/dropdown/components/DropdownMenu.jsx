import * as React from "react";

import { DropdownElement } from "../index";

import { DropdownMenuStyle } from "../styles/DropdownMenuStyle";

const DropdownMenu = ({
	dropdownMenuID,
	dropdownElementsArray,
	dropdownMenuStyleObject,
}) => {
	return (
		<DropdownMenuStyle id={dropdownMenuID} {...dropdownMenuStyleObject}>
			{dropdownElementsArray.length > 0 ? (
				dropdownElementsArray.map((element, idx) => {
					return (
						<DropdownElement
							key={`${element.id}__${idx}`}
							dropdownElementContent={element.content}
							dropdownElementOnClickLogic={element.onClickLogic}
						/>
					);
				})
			) : (
				<p id="dropdown-menu__no-result-message">No Search Result</p>
			)}
		</DropdownMenuStyle>
	);
};

export default DropdownMenu;
