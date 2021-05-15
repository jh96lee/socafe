import * as React from "react";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

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
	const [isResponsiveSearchbarOpen, setIsResponsiveSearchbarOpen] =
		React.useState(false);

	useShowAndHideElementOnClick(
		"responsive-searchbar-trigger",
		"searchbar",
		setIsResponsiveSearchbarOpen,
		false
	);

	const handleOnClick = (e) => {
		setSearchType(e.target.textContent);
	};

	const searchTypeDataArray = [
		{
			event: handleOnClick,
			label: "Users",
			icon: <Users />,
		},
		{
			event: handleOnClick,
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
						{searchTypeDataArray.map((data, idx) => {
							return (
								<DropdownElement
									key={`avatar-dropdown-element__${idx}`}
									dropdownElementEvent={data.event}
									dropdownElementLabel={data.label}
									dropdownElementIcon={data.icon}
								/>
							);
						})}
					</DropdownMenu>
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
