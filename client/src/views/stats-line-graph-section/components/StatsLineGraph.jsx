import * as React from "react";

import StatsXAxis from "./StatsXAxis";
import StatsYAxis from "./StatsYAxis";
import StatsGraph from "./StatsGraph";

import { StatsLineGraphStyle } from "../styles/StatsLineGraphStyle";

const StatsLineGraph = ({
	topYAxisValue,
	xAxisArray,
	yAxisArray,
	coordinatesArray,
}) => {
	return (
		<StatsLineGraphStyle>
			<StatsXAxis xAxisArray={xAxisArray} />

			<StatsYAxis yAxisArray={yAxisArray} />

			<StatsGraph
				topYAxisValue={topYAxisValue}
				yAxisArray={yAxisArray}
				coordinatesArray={coordinatesArray}
			/>
		</StatsLineGraphStyle>
	);
};

export default StatsLineGraph;
