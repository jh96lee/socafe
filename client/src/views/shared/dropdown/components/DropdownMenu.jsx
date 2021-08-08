import * as React from "react";

import { DropdownElement } from "../index";

import { DropdownMenuStyle } from "../styles/DropdownMenuStyle";

const DropdownMenu = ({
	dropdownMenuID,
	dropdownElementsArray,
	dropdownMenuStyleObject,
	children,
}) => {
	return (
		<DropdownMenuStyle id={dropdownMenuID} {...dropdownMenuStyleObject}>
			{!children ? (
				<React.Fragment>
					{dropdownElementsArray.length > 0 ? (
						dropdownElementsArray.map((element, idx) => {
							return (
								<DropdownElement
									key={`${element.id}__${idx}`}
									dropdownElementContent={element.content}
									dropdownElementOnClickEventHandler={
										element.onClickEventHandler
									}
								/>
							);
						})
					) : (
						<p id="dropdown-menu__no-result-message">No Search Result</p>
					)}
				</React.Fragment>
			) : (
				children
			)}
		</DropdownMenuStyle>
	);
};

export default DropdownMenu;
