import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CoordinatesStyle = styled.div`
	position: absolute;
	left: ${(props) => `${props.coordinateLeftPosition}%`};
	bottom: ${(props) => `${props.coordinateBottomPosition}%`};
	z-index: 15;
	transform: translate(-50%, 50%);
	width: 0.7rem;
	height: 0.7rem;
	background-color: cornflowerblue;
	border-radius: 50%;
`;

const StatsConnectedCoordinates = () => {
	const { coordinatesArray } = useSelector((state) => state.statsGraphReducer);

	return (
		<React.Fragment>
			{coordinatesArray.map(({ bottom, left }, idx) => {
				return (
					<React.Fragment>
						{/* <CoordinatesStyle
							coordinateLeftPosition={left}
							coordinateBottomPosition={bottom}
						/> */}

						{idx !== coordinatesArray.length - 1 && (
							<svg viewBox="0 0 100% 100%">
								<line
									x1={`${coordinatesArray[idx].left}%`}
									y1={`${100 - coordinatesArray[idx].bottom}%`}
									x2={`${coordinatesArray[idx + 1].left}%`}
									y2={`${100 - coordinatesArray[idx + 1].bottom}%`}
									stroke="var(--icon-default-color)"
									strokeWidth="0.4rem"
									stroke-linecap="round"
								/>
							</svg>
						)}
					</React.Fragment>
				);
			})}
		</React.Fragment>
	);
};

export default StatsConnectedCoordinates;
