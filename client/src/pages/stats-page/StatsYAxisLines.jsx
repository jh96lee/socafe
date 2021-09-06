import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const YAxisLineStyle = styled.div`
	position: absolute;
	bottom: ${(props) => `${props.yAxisBottomPosition}%`};
	left: 0;
	z-index: 5;
	width: 100%;
	height: ${(props) => (props.isBottomYAxisLine ? "2px" : "1px")};
	background-color: ${(props) =>
		props.isBottomYAxisLine ? "#B9C5D0" : "#d2dee4"};
`;

const StatsYAxisLines = () => {
	const { yAxisArray } = useSelector((state) => state.statsGraphReducer);

	return (
		<React.Fragment>
			{yAxisArray.map(({ bottom }, idx) => {
				return (
					<YAxisLineStyle
						yAxisBottomPosition={bottom}
						isBottomYAxisLine={idx === 0}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default StatsYAxisLines;
