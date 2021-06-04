import * as React from "react";
import { useHistory } from "react-router-dom";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import { IconElement, DropdownMenu, FormInput } from "../../shared";

import {
	SearchbarDropdownStyle,
	SearchbarStyle,
	SearchTypeStyle,
} from "../styles/SearchbarStyle";
import { DropdownStyle, BorderStyle } from "../../../styles";

import { Down, Search, Users, Product } from "../../../assets";

import { handleSearchInputOnChange } from "../../../utils/form/handleSearchInputOnChange";

import styled from "styled-components";

const SearchTypeDropdownStyle = styled(DropdownStyle)`
	position: unset;
	padding: 1rem;
`;

const SearchbarInputDropdownStyle = styled(DropdownStyle)`
	position: unset;
	border-radius: 0.5rem;
`;

const Searchbar = () => {
	const [searchType, setSearchType] = React.useState("Filter");
	const [searchResultArray, setSearchResultArray] = React.useState([]);
	const [isResponsiveSearchbarOpen, setIsResponsiveSearchbarOpen] =
		React.useState(false);

	const history = useHistory();

	useShowAndHideElementOnClick(
		"responsive-searchbar-trigger",
		"searchbar",
		setIsResponsiveSearchbarOpen,
		false
	);

	const handleOnClick = (e) => {
		setSearchType(e.target.textContent);
	};

	const handleOnChange = (e) => {
		const searchAPIEndpoint =
			searchType === "Users" ? "/search/users" : "/search/products";

		handleSearchInputOnChange(e, searchAPIEndpoint, setSearchResultArray);
	};

	const searchTypeDropdownElementArray = [
		{
			content: {
				label: "Users",
				icon: <Users />,
			},
			type: "link",
			onClickEventHandler: handleOnClick,
		},
		{
			content: { label: "Products", icon: <Product /> },
			type: "link",
			onClickEventHandler: handleOnClick,
		},
	];

	const searchResultDropdownElementArray = () => {
		return searchResultArray.map((result) => {
			return {
				content: result,
				type: searchType === "Users" ? "user" : "product",
				onClickEventHandler: () => {
					history.push(
						`/${searchType === "Users" ? "user" : "product"}/${result.id}`
					);
				},
			};
		});
	};

	return (
		<SearchbarDropdownStyle id="responsive-searchbar-trigger">
			<IconElement
				iconUsage="button"
				iconSize="2.3rem"
				iconBreakingPoint="600px"
				iconResponsiveSize="2rem"
			>
				<Search />
			</IconElement>

			<SearchbarStyle
				id="searchbar"
				isResponsiveSearchbarOpen={isResponsiveSearchbarOpen}
			>
				<SearchTypeDropdownStyle id="search-type-dropdown-trigger">
					<SearchTypeStyle>
						{searchType}

						<Down />
					</SearchTypeStyle>

					<DropdownMenu
						triggerID="search-type-dropdown-trigger"
						dropdownElementArray={searchTypeDropdownElementArray}
						dropdownElementKey="search-type"
						menuTop="calc(100% + 10px)"
						menuLeft="0"
					/>
				</SearchTypeDropdownStyle>

				<BorderStyle borderHeight="3rem"></BorderStyle>

				<SearchbarInputDropdownStyle id="searchbar-dropdown-trigger">
					<FormInput
						id="search"
						name="search"
						type="text"
						label="Search"
						placeholder="Search"
						onChange={handleOnChange}
						formInputStyleObject={{
							labelDisplay: "none",
							inputBackgroundColor: "transparent",
							inputBoxShadow: "none",
							inputPlaceholderColor: "var(--primary-text-color)",
						}}
					/>

					<DropdownMenu
						triggerID="searchbar-dropdown-trigger"
						dropdownElementArray={searchResultDropdownElementArray()}
						dropdownElementKey="searchbar"
						menuTop="calc(100% + 10px)"
						menuLeft="0"
						menuWidth="100%"
					/>
				</SearchbarInputDropdownStyle>

				<BorderStyle borderHeight="3rem"></BorderStyle>

				<IconElement
					iconSize="1.4rem"
					iconColor="#fff"
					iconLevel="primary"
					iconUsage="search"
				>
					<Search />
				</IconElement>
			</SearchbarStyle>
		</SearchbarDropdownStyle>
	);
};

export default Searchbar;
