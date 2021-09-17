import * as React from "react";

import { convertDate } from "../../../utils";

import {
	StatsCoordinateStyle,
	StatCoordinateDropdownMenuStyle,
} from "../styles/StatsCoordinateStyle";

import { Date, ViewOutline } from "../../../assets";

const StatsCoordinates = ({ topYAxisValue, coordinatesArray }) => {
	return (
		<React.Fragment>
			{coordinatesArray.map(({ xPosition, yPosition, views, date }, idx) => {
				return (
					<StatsCoordinateStyle
						key={`coordinate__${idx}`}
						coordinateBottom={yPosition}
						coordinateLeft={xPosition}
					>
						<StatCoordinateDropdownMenuStyle
							menuTop={views > topYAxisValue / 2 ? "calc(100% + 8px)" : null}
							menuRight={idx >= (coordinatesArray.length - 1) / 2 ? 0 : null}
							menuBottom={
								views <= topYAxisValue / 2 ? "calc(100% + 8px)" : null
							}
							menuLeft={idx < (coordinatesArray.length - 1) / 2 ? 0 : null}
						>
							<p>
								<Date />

								{convertDate(date)}
							</p>

							<p>
								<ViewOutline />
								{views} views
							</p>
						</StatCoordinateDropdownMenuStyle>
					</StatsCoordinateStyle>
				);
			})}
		</React.Fragment>
	);
};

export default StatsCoordinates;
