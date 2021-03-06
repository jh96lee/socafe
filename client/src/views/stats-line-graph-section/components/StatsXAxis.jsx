import * as React from "react";

import { StatsXAxisStyle, XAxisStyle } from "../styles/StatsXAxisStyle";

const StatsXAxis = ({ xAxisArray }) => {
	return (
		<StatsXAxisStyle>
			{xAxisArray.map(({ position, date }, idx) => {
				if (xAxisArray.length > 7) {
					if (idx % 2 === 0) {
						return (
							<XAxisStyle key={`x-axis__${idx}`} xAxisLeft={position}>
								{date.split(",")[0]}
							</XAxisStyle>
						);
					}
				} else {
					return (
						<XAxisStyle key={`x-axis__${idx}`} xAxisLeft={position}>
							{date}
						</XAxisStyle>
					);
				}
			})}
		</StatsXAxisStyle>
	);
};

export default StatsXAxis;
