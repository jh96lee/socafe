import * as React from "react";
import { useDispatch } from "react-redux";

import { DropdownMenu, DropdownElement, FormInput } from "../../index";
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

	// REVIEw: use searchAndSelectType to figure out which DropdownElement component needs to get rendered
	const searchAndSelectDropdownElementComponentType = (searchAndSelectType) => {
		const searchAndSelectTypeSplittedArray = searchAndSelectType.split("-");

		if (searchAndSelectTypeSplittedArray.includes("user")) {
			return "user";
		} else if (searchAndSelectTypeSplittedArray.includes("category")) {
			return "category";
		}
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
				customDropdownId={`select-${searchAndSelectType}`}
				dataArray={searchResultArray}
				menuTop="110%"
				menuLeft="0"
				menuWidth="100%"
			>
				{searchResultArray.map((result, idx) => {
					return (
						<DropdownElement
							key={`search-${searchAndSelectType}-result__${idx}`}
							dropdownElementContent={result}
							dropdownElementComponentType={
								searchAndSelectType === "post-user" ||
								searchAndSelectType === "comment-user"
									? "user"
									: "category"
							}
							// REVIEW: SearchAndSelect component's dropdown's individual element's job is only to add in content to the corresponding array
							dropdownElementOnClickEventHandler={() => {
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
							}}
						/>
					);
				})}
			</DropdownMenu>
		</DropdownStyle>
	);
};

export default SearchAndSelect;
