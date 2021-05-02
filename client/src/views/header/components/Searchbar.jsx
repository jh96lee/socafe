import * as React from "react";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import { IconElement, DropdownMenu } from "../../shared";

import {
	SearchbarDropdownStyle,
	SearchbarStyle,
	SearchbarInputStyle,
	SearchTypeStyle,
} from "../styles/SearchbarStyle";
import { DropdownStyle } from "../../../styles";

import { ReactComponent as DownArrow } from "../../../assets/down.svg";
import { ReactComponent as Search } from "../../../assets/search.svg";

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

	return (
		<SearchbarDropdownStyle id="responsive-searchbar-trigger">
			<IconElement
				iconRole="presentation"
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
				<DropdownStyle id="search-type-dropdown-trigger">
					<SearchTypeStyle>
						{searchType}

						<DownArrow />
					</SearchTypeStyle>

					<DropdownMenu
						triggerID="search-type-dropdown-trigger"
						dataArray={[<p>Users</p>, <p>Products</p>]}
						customDropdownId="search-type"
						menuTop="140%"
						menuPosition="left"
					/>
				</DropdownStyle>

				<DropdownStyle id="searchbar-dropdown-trigger">
					<SearchbarInputStyle inputTyle="text" inputPlaceholder="Search" />

					<DropdownMenu
						triggerID="searchbar-dropdown-trigger"
						dataArray={[<h1>Search for something</h1>]}
						customDropdownId="searchbar"
						menuTop="140%"
						menuPosition="left"
					/>
				</DropdownStyle>

				<IconElement
					iconSize="1.6rem"
					iconColor="#fff"
					iconLevel="primary"
					iconRole="button"
				>
					<Search />
				</IconElement>
			</SearchbarStyle>
		</SearchbarDropdownStyle>
	);
};

export default Searchbar;
