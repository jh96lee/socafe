import * as React from "react";
import { useDispatch } from "react-redux";

import { SearchAndSelectedValueStyle } from "../styles/SearchAndSelectedValueStyle";

import { removePostCategories } from "../../../../redux/add-post/addPostAction";

import { Remove } from "../../../../assets";

const SearchAndSelectedValue = ({ selectedValue, searchResultType }) => {
	const dispatch = useDispatch();

	const selectedValueID = selectedValue.id;

	const handleOnClick = () => {
		const removeSelectedValueAction =
			searchResultType === "SELECT_POST_CATEGORY" ? removePostCategories : "";

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
