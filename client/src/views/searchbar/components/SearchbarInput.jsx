import * as React from "react";
import { useHistory } from "react-router";

import { FormInput, DropdownMenu, DropdownElement, Button } from "../../shared";

import { useDropdown, usePaginationReact } from "../../../hooks";

import { SearchbarInputStyle } from "../styles/SearchbarInputStyle";

const SearchbarInput = ({ searchType }) => {
	const history = useHistory();

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"searchbar-input-dropdown-trigger",
		"searchbar-input-dropdown-menu",
		false
	);

	const defaultSearchEndpoint =
		searchType === "users" ? "/search/users" : "/search/topics";

	const {
		currentPage,
		contents,
		nextAPIEndpoint,
		fetchContents,
		handleLoadMoreButtonOnClick,
	} = usePaginationReact(defaultSearchEndpoint, 2, false);

	const handleSearchbarInputOnChange = async (e) => {
		await fetchContents(true, "POST", {
			searchInput: e.target.value ? e.target.value : null,
		});

		setIsDropdownMenuOpen(true);
	};

	const dropdownElementsArray = React.useMemo(() => {
		return contents.map((result) => {
			return {
				image: searchType === "users" ? result.avatar_url : result.topic_url,
				text: searchType === "users" ? result.username : result.title,
				subText: searchType === "users" && result.full_name,
				onClickEventHandler: () => {
					setIsDropdownMenuOpen(false);

					history.push(
						`/${searchType === "users" ? "user" : "topic"}/${
							result.username || result.title.toLowerCase()
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
					inputPlaceholderColor: "var(--char-default)",
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
		</SearchbarInputStyle>
	);
};

export default SearchbarInput;
