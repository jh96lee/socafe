import * as React from "react";
import { useDispatch } from "react-redux";

import { DropdownMenu, FormInput } from "../../index";
import SelectedElement from "./SelectedElement";

import { DropdownStyle } from "../../../../styles";
import { SearchAndSelectStyle } from "../styles/SearchAndSelectStyle";
import { SelectedElementsWrapperStyle } from "../styles/SelectedElementsWrapperStyle";

import { addContent } from "../../../../redux/common/addContent";

import { handleSearchInputOnChange } from "../../../../utils/form/handleSearchInputOnChange";

const SearchAndSelect = ({
	// REVIEW: provide dropdown trigger ID
	// REVIEW: figure out action type when DropdownElement gets clicked
	searchAndSelectType,
	// REVIEW: if role is to search, api endpoint MUST be provided
	searchAndSelectAPIEndpoint,
	// REVIEW: array that will be used for data validation when either content gets added or removed
	searchAndSelectedArray,
	// REVIEW: placeholder for FormInput
	searchAndSelectPlaceholder,
}) => {
	const [searchResultArray, setSearchResultArray] = React.useState([]);

	const dispatch = useDispatch();

	const searchResultDropdownElementArray = () => {
		return searchResultArray.map((result) => {
			return {
				content: result,
				type:
					searchAndSelectType === "post-user" || "comment-user"
						? "user"
						: "category",
				onClickEventHandler: () => {
					dispatch(
						addContent(
							// REVIEW: provide the type (post-category, post-user, product-category)
							searchAndSelectType,
							// REVIEW: clicked dropdown element
							result,
							// REVIEW: array used for data validation
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
				<SelectedElementsWrapperStyle>
					{searchAndSelectedArray.map((content, idx) => {
						return (
							<SelectedElement
								key={`search-and-select-${searchAndSelectType}__${idx}`}
								selectedContent={content}
								searchAndSelectType={searchAndSelectType}
							/>
						);
					})}
				</SelectedElementsWrapperStyle>

				<FormInput
					// FIX: inputUsage is used for styling purposes
					inputUsage="search-and-select"
					inputID={`search-and-select-${searchAndSelectType}`}
					inputName={`search-and-select-${searchAndSelectType}-input`}
					inputType="text"
					inputLabel={`search and select `}
					inputPlaceholder={searchAndSelectPlaceholder}
					inputOnChangeEventHandler={(e) =>
						handleSearchInputOnChange(
							e,
							searchAndSelectAPIEndpoint,
							setSearchResultArray
						)
					}
				/>
			</SearchAndSelectStyle>

			<DropdownMenu
				triggerID={`search-and-select-${searchAndSelectType}-dropdown-trigger`}
				dropdownElementKey={`search-and-select-${searchAndSelectType}`}
				dropdownElementArray={searchResultDropdownElementArray()}
				menuTop="calc(100% + 6px)"
				menuLeft="0"
				menuWidth="100%"
			/>
		</DropdownStyle>
	);
};

export default SearchAndSelect;
