import * as React from "react";

import StatsCoordinates from "./StatsCoordinates";
import StatsGraphLines from "./StatsGraphLines";
import StatsCoordinatesLines from "./StatsCoordinatesLines";

import { StatsGraphStyle } from "../styles/StatsGraphStyle";

const StatsGraph = ({ topYAxisValue, yAxisArray, coordinatesArray }) => {
	return (
		<StatsGraphStyle>
			<StatsCoordinates
				topYAxisValue={topYAxisValue}
				coordinatesArray={coordinatesArray}
			/>

			<StatsGraphLines yAxisArray={yAxisArray} />

			<StatsCoordinatesLines coordinatesArray={coordinatesArray} />
		</StatsGraphStyle>
	);
};

export default StatsGraph;
