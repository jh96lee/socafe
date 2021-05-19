import * as React from "react";
import { useDispatch } from "react-redux";

import { SearchAndSelectedStyle } from "../styles/SearchAndSelectedStyle";

import { Remove } from "../../../../assets";

// REVIEW: all this component does is remove selected value from a specific array by firing off the corresponding action
const SearchAndSelected = ({ selectedValue, searchAndSelectedAction }) => {
	const dispatch = useDispatch();

	const selectedValueID = selectedValue.id;

	const handleOnClick = () => {
		dispatch(searchAndSelectedAction(selectedValueID));
	};

	return (
		<SearchAndSelectedStyle>
			<p>{selectedValue.title || selectedValue.username}</p>

			<Remove onClick={handleOnClick} />
		</SearchAndSelectedStyle>
	);
};

export default SearchAndSelected;
