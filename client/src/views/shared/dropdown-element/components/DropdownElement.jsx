import * as React from "react";
import { useDispatch } from "react-redux";

import UserDropdownElement from "./UserDropdownElement";
import CategoryDropdownElement from "./CategoryDropdownElement";

import { addContentOnClick } from "../../../../redux/add-content/addContentAction";

const DropdownElement = ({
	dropdownElementComponentType,
	dropdownElementContentType,
	dropdownElementClickEventType,
	dropdownElementAddContentActionType,
	dropdownElementAddContentMessageActionType,
	content,
}) => {
	const dispatch = useDispatch();

	const handleOnClick = () => {
		if (dropdownElementClickEventType === "search-and-select") {
			dispatch(
				addContentOnClick(
					dropdownElementContentType,
					content,
					dropdownElementAddContentActionType,
					dropdownElementAddContentMessageActionType
				)
			);
		}
	};

	const dropdownElementObject = {
		user: (
			<UserDropdownElement
				content={content}
				onClickEventHandler={handleOnClick}
			/>
		),
		category: (
			<CategoryDropdownElement
				content={content}
				onClickEventHandler={handleOnClick}
			/>
		),
	};

	return dropdownElementObject[dropdownElementComponentType];
};

export default DropdownElement;
