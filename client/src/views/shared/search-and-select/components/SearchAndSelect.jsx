import * as React from "react";

import { DropdownMenu, DropdownElement, FormInput } from "../../index";
import SearchAndSelected from "./SearchAndSelected";

import { DropdownStyle } from "../../../../styles";
import { SearchAndSelectStyle } from "../styles/SearchAndSelectStyle";
import { SearchAndSelectedWrapperStyle } from "../styles/SearchAndSelectedWrapperStyle";

import { searchRequest } from "../../../../utils/searchRequest";

const SearchAndSelect = ({
	searchAndSelectType,
	searchAndSelectedArray,
	searchAndSelectedAction,
	searchAPIEndpoint,
	searchInputPlaceholder,
	dropdownElementComponentType,
	dropdownElementContentType,
	dropdownElementClickEventType,
	dropdownElementAddContentActionType,
	dropdownElementAddContentMessageActionType,
}) => {
	const [searchResultArray, setSearchResultArray] = React.useState([]);

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
					inputUsage="search-and-select"
					inputID={`search-and-select-${searchAndSelectType}`}
					inputName="search-and-select-post-categories"
					inputType="text"
					inputLabel={`search and select `}
					inputPlaceholder={searchInputPlaceholder}
					onChangeEventHandler={(e) =>
						searchRequest(
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
							dropdownElementComponentType={dropdownElementComponentType}
							dropdownElementContentType={dropdownElementContentType}
							dropdownElementClickEventType={dropdownElementClickEventType}
							content={result}
							dropdownElementAddContentActionType={
								dropdownElementAddContentActionType
							}
							dropdownElementAddContentMessageActionType={
								dropdownElementAddContentMessageActionType
							}
						/>
					);
				})}
			</DropdownMenu>
		</DropdownStyle>
	);
};

export default SearchAndSelect;
