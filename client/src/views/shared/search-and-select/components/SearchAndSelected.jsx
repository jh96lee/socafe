import * as React from "react";
import { useDispatch } from "react-redux";

import { SearchAndSelectedStyle } from "../styles/SearchAndSelectedStyle";

import { Remove } from "../../../../assets";

// REVIEW: this component is specific to SearchAndSelect component
// REVIEW: this component has only 1 job and that is filtering the selected element/value off of the corresponding array
const SearchAndSelected = ({ selectedValue, searchAndSelectedAction }) => {
	const dispatch = useDispatch();

	const selectedValueID = selectedValue.id;

	const handleOnClick = () => {
		// REVIEW: this is all it needs to do
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
