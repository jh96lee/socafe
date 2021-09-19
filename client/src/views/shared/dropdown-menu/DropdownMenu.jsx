import * as React from "react";

import DropdownElement from "./DropdownElement";

import { DropdownMenuStyle } from "../../../styles";

const DropdownMenu = ({
	children,
	dropdownMenuID,
	dropdownElementsArray,
	dropdownMenuStyleObject,
	dropdownElementStyleObject,
}) => {
	return (
		<DropdownMenuStyle id={dropdownMenuID} {...dropdownMenuStyleObject}>
			{!dropdownElementsArray ? (
				children
			) : dropdownElementsArray.length === 0 ? (
				<p>Nothing here</p>
			) : (
				<React.Fragment>
					{dropdownElementsArray.map((element, idx) => {
						return (
							<DropdownElement
								key={`dropdown-element__${idx}`}
								{...element}
								dropdownElementStyleObject={dropdownElementStyleObject}
							/>
						);
					})}
				</React.Fragment>
			)}
		</DropdownMenuStyle>
	);
};

export default DropdownMenu;
