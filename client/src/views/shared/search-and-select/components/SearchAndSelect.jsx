import * as React from "react";

import { DropdownMenu, SearchInput, SearchResult } from "../../index";
import SearchAndSelectedValue from "./SearchAndSelectedValue";

import { DropdownStyle } from "../../../../styles";
import { SearchAndSelectStyle } from "../styles/SearchAndSelectStyle";
import { SearchAndSelectedStyle } from "../styles/SearchAndSelectedStyle";

const SearchAndSelect = ({
	searchAndSelectType,
	selectedValuesArray,
	searchAPIEndpoint,
	searchResultType,
}) => {
	const [searchResultArray, setSearchResultArray] = React.useState([]);

	return (
		<DropdownStyle
			id={`search-and-select-${searchAndSelectType}-dropdown-trigger`}
		>
			<SearchAndSelectStyle>
				<SearchAndSelectedStyle>
					{selectedValuesArray.map((value, idx) => {
						return (
							<SearchAndSelectedValue
								key={`search-and-selected-${searchAndSelectType}-value__${idx}`}
								selectedValue={value}
								searchResultType={searchResultType}
							/>
						);
					})}
				</SearchAndSelectedStyle>

				<SearchInput
					setSearchResultArray={setSearchResultArray}
					searchAPIEndpoint={searchAPIEndpoint}
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
						<SearchResult
							key={`search-${searchAndSelectType}-result__${idx}`}
							searchResult={result}
							searchResultType={searchResultType}
							selectedValuesArray={selectedValuesArray}
						/>
					);
				})}
			</DropdownMenu>
		</DropdownStyle>
	);
};

export default SearchAndSelect;
