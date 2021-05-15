import * as React from "react";
import { useDispatch } from "react-redux";

import { SearchAndSelectedValueStyle } from "../styles/SearchAndSelectedValueStyle";

import {
	removePostCategories,
	removeUserOnPost,
} from "../../../../redux/add-post/addPostAction";

import { Remove } from "../../../../assets";

// REVIEW: all this component does is remove selected value from a specific array by firing off the corresponding action
const SearchAndSelectedValue = ({ selectedValue, searchResultType }) => {
	const dispatch = useDispatch();

	const selectedValueID = selectedValue.id;

	const handleOnClick = () => {
		const removeSelectedValueAction =
			searchResultType === "SELECT_POST_CATEGORY"
				? removePostCategories
				: searchResultType === "SELECT_POST_USER"
				? removeUserOnPost
				: "";

		dispatch(removeSelectedValueAction(selectedValueID));
	};

	return (
		<SearchAndSelectedValueStyle>
			<p>{selectedValue.title || selectedValue.username}</p>

			<Remove onClick={handleOnClick} />
		</SearchAndSelectedValueStyle>
	);
};

export default SearchAndSelectedValue;
