import * as React from "react";

import Dropdown from "../../shared/Dropdown";

import { IconElementStyle } from "../../../styles";
import {
	SearchbarStyle,
	SearchbarInputStyle,
	SearchTypeStyle,
	SearchIconStyle,
} from "../styles/SearchbarStyle";

import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Searchbar = ({ isResponsiveSearchbarOpen }) => {
	const [searchType, setSearchType] = React.useState("Filter");
	const [
		isSearchTypeDropdownOpen,
		setIsSearchTypeDropdownOpen,
	] = React.useState(false);
	const [isSearchDropdownOpen, setIsSearchDropdownOpen] = React.useState(false);

	return (
		<SearchbarStyle isResponsiveSearchbarOpen={isResponsiveSearchbarOpen}>
			<SearchTypeStyle id="search-type">
				{searchType}
				{isSearchTypeDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</SearchTypeStyle>

			<Dropdown
				dataArray={[
					"This is first element",
					"This is the 2nd element",
					"This is the 3rd element",
				]}
				isOpen={isSearchTypeDropdownOpen}
				setIsOpen={setIsSearchTypeDropdownOpen}
				triggerElementID="search-type"
			/>

			<SearchbarInputStyle type="text" placeholder="Search" />

			<SearchIconStyle>
				<IconElementStyle>
					<BiSearch />
				</IconElementStyle>
			</SearchIconStyle>
		</SearchbarStyle>
	);
};

export default Searchbar;
