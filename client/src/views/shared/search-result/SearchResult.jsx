import * as React from "react";
import { useDispatch } from "react-redux";

import { addContentSearchResultOnClick } from "../../../utils/addContentSearchResultOnClick";

import {
	SearchResultStyle,
	SearchResultMetadataStyle,
} from "./SearchResultStyle";

// REVIEW: this component either redirects to a different url or adds the result to corresponding array via redux action
const SearchResult = ({
	searchResult,
	searchResultTypes,
	selectedValuesArray,
}) => {
	const dispatch = useDispatch();

	const { searchResultType, searchResultActionType } = searchResultTypes;

	console.log(searchResultActionType);

	const handleOnClick = () => {
		if (searchResultType === "search-and-select") {
			// REVIEW: this function receives searchResultType and fires off different actions which then updates the corresponding state array
			return addContentSearchResultOnClick(
				dispatch,
				searchResult,
				searchResultActionType,
				selectedValuesArray
			);
		} else {
			console.log("PUSH TO URL");
		}
	};

	return (
		<SearchResultStyle onClick={handleOnClick}>
			<img src={searchResult.category_url || searchResult.avatar_url} />

			<SearchResultMetadataStyle>
				<p>
					{searchResult.username && "@"}
					{searchResult.username || searchResult.title}
				</p>

				<span>{searchResult.full_name}</span>
			</SearchResultMetadataStyle>
		</SearchResultStyle>
	);
};

export default SearchResult;
