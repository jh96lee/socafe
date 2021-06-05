import * as React from "react";
import { useDispatch } from "react-redux";

import { DropdownMenu, FormInput } from "../../index";
import SearchAndSelected from "./SearchAndSelected";

import { addContent } from "../../../../redux/common/addContent";

import { useDropdown } from "../../../../hooks/useDropdown";

import { handleSearchInputOnChange } from "../../../../utils/form/handleSearchInputOnChange";

import { SearchAndSelectStyle } from "../styles/SearchAndSelectStyle";

const SearchAndSelect = ({
	searchAndSelectType,
	searchAndSelectAPIEndpoint,
	searchAndSelectedArray,
	searchAndSelectPlaceholder,
	addContentActionCreator,
	removeContentActionCreator,
	setErrorMessageActionCreator,
}) => {
	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		`search-and-select-${searchAndSelectType}-dropdown-trigger`,
		`search-and-select-${searchAndSelectType}-dropdown-menu`
	);

	const [searchResultArray, setSearchResultArray] = React.useState([]);

	const dispatch = useDispatch();

	const searchResultArrayCreator = () => {
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
						addContent(
							// REVIEW: provide the type (post-category, post-user, product-category)
							searchAndSelectType,
							// REVIEW: clicked dropdown element
							result,
							// REVIEW: array used for data validation
							searchAndSelectedArray,
							addContentActionCreator,
							setErrorMessageActionCreator
						)
					);
				},
			};
		});
	};

	return (
		<SearchAndSelectStyle
			id={`search-and-select-${searchAndSelectType}-dropdown-trigger`}
		>
			<SearchAndSelected
				searchAndSelectType={searchAndSelectType}
				searchAndSelectedArray={searchAndSelectedArray}
				removeContentActionCreator={removeContentActionCreator}
			/>

			<FormInput
				id={`search-and-select-${searchAndSelectType}`}
				name={`search-and-select-${searchAndSelectType}-input`}
				type="text"
				label={`search and select `}
				placeholder={searchAndSelectPlaceholder}
				onChange={(e) =>
					handleSearchInputOnChange(
						e,
						searchAndSelectAPIEndpoint,
						setSearchResultArray,
						setIsDropdownMenuOpen
					)
				}
				formInputStyleObject={{
					labelDisplay: "none",
					inputBackgroundColor: "transparent",
					inputBoxShadow: "none",
				}}
			/>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID={`search-and-select-${searchAndSelectType}-dropdown-menu`}
					dropdownElementKey={`search-and-select-${searchAndSelectType}-element`}
					dropdownElementArray={searchResultArrayCreator()}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 6px)",
						menuLeft: "0",
						menuWidth: "100%",
					}}
				/>
			)}
		</SearchAndSelectStyle>
	);
};

export default SearchAndSelect;
