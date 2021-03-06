import * as React from "react";

import { useDropdown } from "../../../hooks";

import { DropdownMenuStyle, StatsFilterStyle } from "../../../styles";

import { Up, Down } from "../../../assets";

const StatsLineGraphNDaysFilter = ({ nDays, setNDays }) => {
	const { isDropdownMenuOpen } = useDropdown(
		"stats-line-graph-n-days-dropdown-trigger",
		"stats-line-graph-n-days-dropdown-menu",
		true
	);

	const nDaysArray = [7, 14, 21, 30];

	return (
		<StatsFilterStyle id="stats-line-graph-n-days-dropdown-trigger">
			<p>Last {nDays} Days</p>

			{isDropdownMenuOpen ? <Up /> : <Down />}

			{isDropdownMenuOpen && (
				<DropdownMenuStyle
					id="stats-line-graph-n-days-dropdown-menu"
					menuTop="calc(100% + 6px)"
					menuRight="0"
				>
					{nDaysArray.map((day, idx) => {
						return (
							<p
								key={`${day}__${idx}`}
								onClick={() => {
									setNDays(day);
								}}
							>
								{day} days
							</p>
						);
					})}
				</DropdownMenuStyle>
			)}
		</StatsFilterStyle>
	);
};

export default StatsLineGraphNDaysFilter;
