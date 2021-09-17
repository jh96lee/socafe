import * as React from "react";

import { FormInput, DropdownElement, Button } from "../..";
import SearchAndSelectedContents from "./SearchAndSelectedContents";
import DropdownMenu from "../../dropdown/components/DropdownMenu";

import { useDropdown, usePagination } from "../../../../hooks";

import { SearchAndSelectStyle } from "../styles/SearchAndSelectStyle";

const SearchAndSelect = ({
	searchAndSelectType,
	searchAndSelectedContentsArray,
	searchAndSelectInputPlaceholder,
	searchAndSelectInputAPIEndpoint,
	dropdownElementOnClickLogic,
	selectedContentRemoveIconOnClickLogic,
}) => {
	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		`search-and-select-${searchAndSelectType}-dropdown-trigger`,
		`search-and-select-${searchAndSelectType}-dropdown-menu`,
		false
	);

	const {
		contents,
		currentPage,
		nextAPIEndpoint,
		fetchContents,
		loadMoreButtonOnClickLogic,
	} = usePagination(searchAndSelectInputAPIEndpoint, 5, true);

	const handleFormInputOnChange = (e) => {
		setIsDropdownMenuOpen(true);

		fetchContents(true, "POST", {
			searchInput: e.target.value ? e.target.value : null,
		});
	};

	const handleLoadMoreButtonOnClick = () => {
		loadMoreButtonOnClickLogic();
	};

	const searchbarInputRef = React.useRef();

	React.useEffect(() => {
		if (contents.length > 0) {
			fetchContents(false, "POST", {
				searchInput: searchbarInputRef.current.value,
			});
		}
	}, [currentPage]);

	// REVIEW: this provides the array that DropdownMenu needs to render
	const dropdownElementsArray = contents.map((result) => {
		return {
			image: result.topic_url,
			text: result.title,
			onClickEventHandler: () => {
				dropdownElementOnClickLogic(result);
			},
		};
	});

	return (
		<SearchAndSelectStyle
			id={`search-and-select-${searchAndSelectType}-dropdown-trigger`}
		>
			<SearchAndSelectedContents
				searchAndSelectType={searchAndSelectType}
				searchAndSelectedContentsArray={searchAndSelectedContentsArray}
				selectedContentRemoveIconOnClickLogic={
					selectedContentRemoveIconOnClickLogic
				}
			/>

			<FormInput
				id={searchAndSelectType}
				name={searchAndSelectType}
				type="text"
				label={searchAndSelectType}
				inputRef={searchbarInputRef}
				placeholder={searchAndSelectInputPlaceholder}
				onChange={handleFormInputOnChange}
				formInputStyleObject={{
					labelDisplay: "none",
					inputBackgroundColor: "transparent",
					inputBoxShadow: "none",
				}}
			/>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="searchbar-input-dropdown-menu"
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 7px)",
						menuLeft: "0",
						menuWidth: "100%",
					}}
				>
					{contents.length === 0 ? (
						<p>Nothing here</p>
					) : (
						<React.Fragment>
							{dropdownElementsArray.map((element, idx) => {
								return (
									<DropdownElement
										key={`searchbar-dropdown-element__${idx}`}
										{...element}
									/>
								);
							})}
						</React.Fragment>
					)}

					{nextAPIEndpoint === null || contents.length === 0 ? null : (
						<Button
							buttonType="outline"
							buttonStyleObject={{
								buttonFontWeight: "400",
								buttonWidth: "100%",
								buttonPadding: "1.3rem",
								buttonBorderRadius: "0.5rem",
							}}
							onClick={handleLoadMoreButtonOnClick}
						>
							Load More
						</Button>
					)}
				</DropdownMenu>
			)}
		</SearchAndSelectStyle>
	);
};

export default SearchAndSelect;
