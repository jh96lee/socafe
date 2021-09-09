import * as React from "react";

import { StatsXAxisStyle, XAxisStyle } from "../styles/StatsXAxisStyle";

const StatsXAxis = ({ xAxisArray }) => {
	return (
		<StatsXAxisStyle>
			{xAxisArray.map(({ position, date }, idx) => {
				return (
					<XAxisStyle key={`x-axis__${idx}`} xAxisLeft={position}>
						{date}
					</XAxisStyle>
				);
			})}
		</StatsXAxisStyle>
	);
};

export default StatsXAxis;
