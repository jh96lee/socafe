import * as React from "react";

import { StatsYAxisStyle, YAxisStyle } from "../styles/StatsYAxisStyle";

const StatsYAxis = ({ yAxisArray }) => {
	return (
		<StatsYAxisStyle>
			{yAxisArray.map(({ value, position }, idx) => {
				return (
					<YAxisStyle key={`y-axis__${idx}`} yAxisBottom={position}>
						{value}
					</YAxisStyle>
				);
			})}
		</StatsYAxisStyle>
	);
};

export default StatsYAxis;
