import * as React from "react";

import { StatsAggregateStyle } from "../styles/StatsAggregateStyle";

const StatsAggregate = ({ aggregateIcon, aggregateLabel, aggregateStat }) => {
	return (
		<StatsAggregateStyle>
			{aggregateIcon}

			<span>{aggregateLabel}</span>

			<h1>{aggregateStat}</h1>
		</StatsAggregateStyle>
	);
};

export default StatsAggregate;
