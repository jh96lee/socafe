import * as React from "react";

import { StatsCoordinatesLinesStyle } from "../styles/StatsCoordinatesLinesStyle";

const StatsCoordinatesLines = ({ coordinatesArray }) => {
	return (
		<StatsCoordinatesLinesStyle>
			{coordinatesArray.map(({ xPosition, yPosition }, idx) => {
				return (
					<React.Fragment key={`coordinate-line__${idx}`}>
						{idx !== coordinatesArray.length - 1 && (
							<svg>
								<line
									x1={`${xPosition}%`}
									y1={`${100 - yPosition}%`}
									x2={`${coordinatesArray[idx + 1].xPosition}%`}
									y2={`${100 - coordinatesArray[idx + 1].yPosition}%`}
									stroke="var(--icon-default-color)"
									strokeWidth="0.4rem"
									strokeLinecap="round"
								/>
							</svg>
						)}
					</React.Fragment>
				);
			})}
		</StatsCoordinatesLinesStyle>
	);
};

export default StatsCoordinatesLines;
