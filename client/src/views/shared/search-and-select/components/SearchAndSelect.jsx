import * as React from "react";

import { FormInput, DropdownElement } from "../..";
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
	} = usePagination(searchAndSelectInputAPIEndpoint, 5, false);

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
			content: result,
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
					dropdownMenuID={`search-and-select-${searchAndSelectType}-dropdown-menu`}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 6px)",
						menuLeft: "0",
						menuWidth: "100%",
					}}
				>
					{dropdownElementsArray.length > 0 ? (
						dropdownElementsArray.map((element, idx) => {
							return (
								<DropdownElement
									key={`${element.id}__${idx}`}
									dropdownElementContent={element.content}
									dropdownElementOnClickEventHandler={
										element.onClickEventHandler
									}
								/>
							);
						})
					) : (
						<p id="dropdown-menu__no-result-message">No Search Result</p>
					)}

					{nextAPIEndpoint === null || contents.length === 0 ? null : (
						<button onClick={handleLoadMoreButtonOnClick}>Load More</button>
					)}
				</DropdownMenu>
			)}
		</SearchAndSelectStyle>
	);
};

export default SearchAndSelect;
