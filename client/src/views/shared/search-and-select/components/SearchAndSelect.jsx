import * as React from "react";
import { useDispatch } from "react-redux";

import { DropdownMenu, FormInput } from "../../index";
import SearchAndSelected from "./SearchAndSelected";

import { DropdownStyle } from "../../../../styles";
import { SearchAndSelectStyle } from "../styles/SearchAndSelectStyle";
import { SearchAndSelectedWrapperStyle } from "../styles/SearchAndSelectedWrapperStyle";

import { searchAndSelectAddContent } from "../../../../redux/common/searchAndSelectAddContent";

import { handleSearchInputOnChange } from "../../../../utils/form/handleSearchInputOnChange";

const SearchAndSelect = ({
	// REVIEW: for DropdownMenu uniqueness
	// REVIEW: to identify the type of component DropdownElement needs to render
	// REVIEW: to figure out the actionTypes that needs to be triggered when DropdownElement's onClick gets triggered
	searchAndSelectType,
	// REVIEW: array that will be used for data validation when either content gets added or removed
	searchAndSelectedArray,
	// REVIEW: action that will get triggered when SearchAndSelectED component gets clicked
	searchAndSelectedAction,
	// REVIEW: API endpoint for search feature
	searchAPIEndpoint,
	// REVIEW: placeholder for FormInput
	searchInputPlaceholder,
}) => {
	const [searchResultArray, setSearchResultArray] = React.useState([]);

	const dispatch = useDispatch();

	const searchResultDropdownElementArray = () => {
		return searchResultArray.map((result) => {
			return {
				content: result,
				type:
					searchAndSelectType === "post-user" ||
					searchAndSelectType === "comment-user"
						? "user"
						: "category",
				onClickEventHandler: () => {
					dispatch(
						searchAndSelectAddContent(
							// REVIEW: provide SearchAndSelect's type
							searchAndSelectType,
							// REVIEW: individual element's data
							result,
							// REVIEW: array that will be used for data validation
							searchAndSelectedArray
						)
					);
				},
			};
		});
	};

	return (
		<DropdownStyle
			id={`search-and-select-${searchAndSelectType}-dropdown-trigger`}
		>
			<SearchAndSelectStyle>
				<SearchAndSelectedWrapperStyle>
					{searchAndSelectedArray.map((value, idx) => {
						return (
							<SearchAndSelected
								key={`search-and-selected-${searchAndSelectType}-value__${idx}`}
								selectedValue={value}
								searchAndSelectedAction={searchAndSelectedAction}
							/>
						);
					})}
				</SearchAndSelectedWrapperStyle>

				<FormInput
					// REVIEW: inputUsage is used for styling purposes
					inputUsage="search-and-select"
					inputID={`search-and-select-${searchAndSelectType}`}
					inputName="search-and-select-post-categories"
					inputType="text"
					inputLabel={`search and select `}
					inputPlaceholder={searchInputPlaceholder}
					inputOnChangeEventHandler={(e) =>
						handleSearchInputOnChange(
							e.target.value,
							searchAPIEndpoint,
							setSearchResultArray
						)
					}
				/>
			</SearchAndSelectStyle>

			<DropdownMenu
				triggerID={`search-and-select-${searchAndSelectType}-dropdown-trigger`}
				dropdownElementKey={`select-${searchAndSelectType}`}
				dropdownElementArray={searchResultDropdownElementArray()}
				menuTop="calc(100% + 6px)"
				menuLeft="0"
				menuWidth="100%"
			/>
		</DropdownStyle>
	);
};

export default SearchAndSelect;
