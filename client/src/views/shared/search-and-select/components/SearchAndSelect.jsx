import * as React from "react";
import { useDispatch } from "react-redux";

import { FormInput, DropdownMenu, DropdownElement, Button } from "../..";
import SelectedContents from "./SelectedContents";

import { useDropdown } from "../../../../hooks";

import { SearchAndSelectStyle } from "../styles/SearchAndSelectStyle";

const SearchAndSelect = ({
	contentType,
	handleFormInputOnChange,
	handleLoadMoreButtonOnClick,
	nextAPIEndpoint,
	searchAndSelectDropdownElementsArray,
	searchInput,
	selectedContentsArray,
	selectedContentKey,
	removeContent,
}) => {
	const { isDropdownMenuOpen } = useDropdown(
		`add-post-${contentType}s-dropdown-trigger`,
		`add-post-${contentType}s-dropdown-menu`,
		true
	);

	return (
		<SearchAndSelectStyle id={`add-post-${contentType}s-dropdown-trigger`}>
			<SelectedContents
				selectedContentsArray={selectedContentsArray}
				selectedContentKey={selectedContentKey}
				removeContent={removeContent}
			/>

			<FormInput
				placeholder={`Search for ${contentType}s`}
				value={searchInput}
				onChange={handleFormInputOnChange}
				formInputStyleObject={{
					labelDisplay: "none",
					inputBackgroundColor: "transparent",
					inputBoxShadow: "none",
				}}
			/>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID={`add-post-${contentType}-dropdown-menu`}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 6px)",
						menuWidth: "100%",
					}}
				>
					{searchAndSelectDropdownElementsArray.length === 0 ? (
						<p>Nothing here</p>
					) : (
						<React.Fragment>
							{searchAndSelectDropdownElementsArray.map((content) => {
								return (
									<DropdownElement
										key={`add-post-topic__${content.id}`}
										{...content}
									/>
								);
							})}

							{nextAPIEndpoint && (
								<Button
									buttonType="outline"
									onClick={handleLoadMoreButtonOnClick}
									buttonStyleObject={{
										buttonFontWeight: "400",
										buttonWidth: "100%",
										buttonPadding: "1.3rem",
										buttonBorderRadius: "0.5rem",
									}}
								>
									Load More
								</Button>
							)}
						</React.Fragment>
					)}
				</DropdownMenu>
			)}
		</SearchAndSelectStyle>
	);
};

export default SearchAndSelect;
