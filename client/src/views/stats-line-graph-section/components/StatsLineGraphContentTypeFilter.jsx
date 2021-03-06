import * as React from "react";

import { useDropdown } from "../../../hooks";

import { capitalizeFirstLetter } from "../../../utils";

import { DropdownMenuStyle, StatsFilterStyle } from "../../../styles";

import { Up, Down } from "../../../assets";

const StatsLineGraphContentTypeFilter = ({ contentType, setContentType }) => {
	const { isDropdownMenuOpen } = useDropdown(
		"stats-line-graph-content-types-dropdown-trigger",
		"stats-line-graph-content-types-dropdown-menu",
		true
	);
	const contentTypesArray = ["post", "story"];

	return (
		<StatsFilterStyle id="stats-line-graph-content-types-dropdown-trigger">
			<p>{capitalizeFirstLetter(contentType)}</p>

			{isDropdownMenuOpen ? <Up /> : <Down />}

			{isDropdownMenuOpen && (
				<DropdownMenuStyle
					id="stats-line-graph-content-types-dropdown-menu"
					menuTop="calc(100% + 6px)"
					menuRight="0"
				>
					{contentTypesArray.map((type, idx) => {
						return (
							<p
								key={`${type}__${idx}`}
								onClick={() => {
									setContentType(type);
								}}
							>
								{capitalizeFirstLetter(type)}
							</p>
						);
					})}
				</DropdownMenuStyle>
			)}
		</StatsFilterStyle>
	);
};

export default StatsLineGraphContentTypeFilter;
