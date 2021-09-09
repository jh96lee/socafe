import * as React from "react";

import { StatsGraphLineStyle } from "../styles/StatsGraphLineStyle";

const StatsGraphLines = ({ yAxisArray }) => {
	return (
		<React.Fragment>
			{yAxisArray.map(({ position }, idx) => {
				return (
					idx !== 0 && (
						<StatsGraphLineStyle key={`line__${idx}`} lineBottom={position} />
					)
				);
			})}
		</React.Fragment>
	);
};

export default StatsGraphLines;
