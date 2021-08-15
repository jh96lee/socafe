import * as React from "react";
import { useHistory } from "react-router";

import { FormInput, DropdownMenu, DropdownElement } from "../../shared";

import { useDropdown, usePagination } from "../../../hooks";

import { SearchbarInputStyle } from "../styles/SearchbarInputStyle";

const SearchbarInput = ({ searchType }) => {
	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"searchbar-input-dropdown-trigger",
		"searchbar-input-dropdown-menu",
		false
	);

	const defaultSearchEndpoint =
		searchType === "Users" ? "/search/users" : "/search/topics";

	const {
		currentPage,
		contents,
		nextAPIEndpoint,
		fetchContents,
		loadMoreButtonOnClickLogic,
	} = usePagination(defaultSearchEndpoint, 5, false, null, null, true);

	const handleLoadMoreButtonOnClick = () => {
		loadMoreButtonOnClickLogic();
	};

	const handleSearchbarInputOnChange = async (e) => {
		await fetchContents(true, "POST", {
			searchInput: e.target.value ? e.target.value : null,
		});

		setIsDropdownMenuOpen(true);
	};

	const history = useHistory();

	const dropdownElementsArray = React.useMemo(() => {
		return contents.map((result) => {
			return {
				content: result,
				onClickEventHandler: () => {
					setIsDropdownMenuOpen(false);

					history.push(
						`/${searchType === "Users" ? "user" : "topic"}/${
							result.username.toLowerCase() || result.title.toLowerCase()
						}`
					);
				},
			};
		});
	}, [contents]);

	const searchbarInputRef = React.useRef();

	React.useEffect(() => {
		if (contents.length > 0) {
			fetchContents(false, "POST", {
				searchInput: searchbarInputRef.current.value,
			});
		}
	}, [currentPage]);

	return (
		<SearchbarInputStyle id="searchbar-input-dropdown-trigger">
			<FormInput
				id="search"
				name="search"
				type="text"
				label="Search"
				inputRef={searchbarInputRef}
				placeholder="Search"
				onChange={handleSearchbarInputOnChange}
				formInputStyleObject={{
					labelDisplay: "none",
					inputBackgroundColor: "transparent",
					inputPadding: "1.3rem 1rem",
					inputBoxShadow: "none",
					inputPlaceholderColor: "var(--text-1)",
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
		</SearchbarInputStyle>
	);
};

export default SearchbarInput;
