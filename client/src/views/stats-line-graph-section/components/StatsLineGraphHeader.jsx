import * as React from "react";

import StatsLineGraphNDaysFilter from "./StatsLineGraphNDaysFilter";
import StatsLineGraphContentTypeFilter from "./StatsLineGraphContentTypeFilter";

import { capitalizeFirstLetter } from "../../../utils";

import {
	StatsLineGraphHeaderStyle,
	StatsLineGraphFiltersStyle,
} from "../styles/StatsLineGraphHeaderStyle";

const StatsLineGraphHeader = ({
	contentType,
	setContentType,
	nDays,
	setNDays,
}) => {
	return (
		<StatsLineGraphHeaderStyle>
			<h2>{capitalizeFirstLetter(contentType)} views over time</h2>

			<StatsLineGraphFiltersStyle>
				<StatsLineGraphNDaysFilter nDays={nDays} setNDays={setNDays} />

				<StatsLineGraphContentTypeFilter
					contentType={contentType}
					setContentType={setContentType}
				/>
			</StatsLineGraphFiltersStyle>
		</StatsLineGraphHeaderStyle>
	);
};

export default StatsLineGraphHeader;
