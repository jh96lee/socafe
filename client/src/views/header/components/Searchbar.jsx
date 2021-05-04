import * as React from "react";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import { IconElement, DropdownMenu, FormInput } from "../../shared";

import {
	SearchbarDropdownStyle,
	SearchbarStyle,
	SearchbarInputStyle,
	SearchTypeStyle,
} from "../styles/SearchbarStyle";
import { DropdownStyle, BorderStyle } from "../../../styles";

import { ReactComponent as DownArrow } from "../../../assets/down.svg";
import { ReactComponent as Search } from "../../../assets/search.svg";

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
	const [
		isResponsiveSearchbarOpen,
		setIsResponsiveSearchbarOpen,
	] = React.useState(false);

	useShowAndHideElementOnClick(
		"responsive-searchbar-trigger",
		"searchbar",
		setIsResponsiveSearchbarOpen,
		false
	);

	const handleOnClick = (e) => {
		setSearchType(e.target.textContent);
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

						<DownArrow />
					</SearchTypeStyle>

					<DropdownMenu
						triggerID="search-type-dropdown-trigger"
						dataArray={[
							<p onClick={handleOnClick}>Users</p>,
							<p onClick={handleOnClick}>Products</p>,
						]}
						customDropdownId="search-type"
						menuTop="110%"
						menuLeft="0"
					/>
				</SearchTypeDropdownStyle>

				<BorderStyle borderHeight="3rem"></BorderStyle>

				<SearchbarInputDropdownStyle id="searchbar-dropdown-trigger">
					<FormInput
						inputID="search"
						inputPlaceholder="Search"
						inputUsage="search"
						inputLabel="Search"
						inputType="text"
						inputPadding="1rem"
					/>

					<DropdownMenu
						triggerID="searchbar-dropdown-trigger"
						dataArray={[
							<h4 style={{ color: "#fff", fontWeight: "500" }}>
								Search for something
							</h4>,
						]}
						customDropdownId="searchbar"
						menuTop="110%"
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
