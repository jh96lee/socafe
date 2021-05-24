import * as React from "react";
import { useHistory } from "react-router-dom";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import { handleSearchInputOnChange } from "../../../utils/form/handleSearchInputOnChange";

import {
	IconElement,
	DropdownMenu,
	DropdownElement,
	FormInput,
} from "../../shared";

import {
	SearchbarDropdownStyle,
	SearchbarStyle,
	SearchTypeStyle,
} from "../styles/SearchbarStyle";
import { DropdownStyle, BorderStyle } from "../../../styles";

import { Down, Search, Users, Product } from "../../../assets";

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

		handleSearchInputOnChange(
			e.target.value,
			searchAPIEndpoint,
			setSearchResultArray
		);
	};

	const searchTypeDataArray = [
		{
			onClickEvent: handleOnClick,
			label: "Users",
			icon: <Users />,
		},
		{
			onClickEvent: handleOnClick,
			label: "Products",
			icon: <Product />,
		},
	];

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
						dataArray={searchTypeDataArray}
						customDropdownId="search-type"
						menuTop="110%"
						menuLeft="0"
					>
						{searchTypeDataArray.map((element, idx) => {
							return (
								<DropdownElement
									key={`search-type-dropdown-element__${idx}`}
									dropdownElementContent={{
										icon: element.icon,
										label: element.label,
									}}
									dropdownElementComponentType="link"
									dropdownElementOnClickEventHandler={element.onClickEvent}
								/>
							);
						})}
					</DropdownMenu>
				</SearchTypeDropdownStyle>

				<BorderStyle borderHeight="3rem"></BorderStyle>

				<SearchbarInputDropdownStyle id="searchbar-dropdown-trigger">
					<FormInput
						inputUsage="search"
						inputID="search"
						inputName="search"
						inputType="text"
						inputLabel="Search"
						inputPlaceholder="Search"
						inputOnChangeEventHandler={handleOnChange}
						inputPadding="1rem"
					/>

					{/* FIX: fix this later */}
					<DropdownMenu
						triggerID="searchbar-dropdown-trigger"
						dataArray={searchResultArray}
						customDropdownId="searchbar"
						menuTop="110%"
						menuLeft="0"
						menuWidth="100%"
					>
						{searchResultArray.map((result, idx) => {
							return (
								<DropdownElement
									key={`search-result__${idx}`}
									dropdownElementContent={result}
									dropdownElementComponentType={
										searchType === "Users" ? "user" : "product"
									}
									dropdownElementOnClickEventHandler={() => {
										history.push(
											`/${searchType === "Users" ? "user" : "product"}/${
												result.id
											}`
										);
									}}
								/>
							);
						})}
					</DropdownMenu>
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
