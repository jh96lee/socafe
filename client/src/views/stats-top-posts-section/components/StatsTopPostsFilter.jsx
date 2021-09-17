import * as React from "react";

import { useDropdown } from "../../../hooks";

import { capitalizeFirstLetter } from "../../../utils";

import { DropdownMenuStyle, StatsFilterStyle } from "../../../styles";

import { Up, Down } from "../../../assets";

const StatsTopPostsFilter = ({ topBy, setTopBy }) => {
	const { isDropdownMenuOpen } = useDropdown(
		"stats-top-posts-dropdown-trigger",
		"stats-top-posts-dropdown-menu",
		true
	);

	const topByArray = ["views", "likes", "comments"];

	return (
		<StatsFilterStyle id="stats-top-posts-dropdown-trigger">
			<p>{capitalizeFirstLetter(topBy)}</p>

			{isDropdownMenuOpen ? <Up /> : <Down />}

			{isDropdownMenuOpen && (
				<DropdownMenuStyle
					id="stats-top-posts-dropdown-menu"
					menuTop="calc(100% + 6px)"
					menuRight="0"
				>
					{topByArray.map((filter, idx) => {
						return (
							<p
								key={`${filter}__${idx}`}
								onClick={() => {
									setTopBy(filter);
								}}
							>
								{filter}
							</p>
						);
					})}
				</DropdownMenuStyle>
			)}
		</StatsFilterStyle>
	);
};

export default StatsTopPostsFilter;
