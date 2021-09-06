import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const YAxisCoordinatesStyle = styled.div`
	position: absolute;
	left: -2%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: 100%;
`;

const YAxisCoordinateStyle = styled.p`
	position: absolute;
	bottom: ${(props) => `${props.yAxisBottomPosition}%`};
	transform: translateY(50%);
	color: #63727a;
	font-size: 1.44rem;
`;

const StatsYAxisCoordinates = () => {
	const { yAxisArray } = useSelector((state) => state.statsGraphReducer);

	return (
		<YAxisCoordinatesStyle>
			{yAxisArray.map(({ bottom, coordinate }) => {
				return (
					<YAxisCoordinateStyle yAxisBottomPosition={bottom}>
						{coordinate}
					</YAxisCoordinateStyle>
				);
			})}
		</YAxisCoordinatesStyle>
	);
};

export default StatsYAxisCoordinates;
