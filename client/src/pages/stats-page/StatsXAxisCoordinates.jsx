import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const XAxisCoordinatesStyle = styled.div`
	position: absolute;
	bottom: -7%;
	display: flex;
	align-items: center;
	width: 100%;
`;

const XAxisCoordinateStyle = styled.p`
	position: absolute;
	left: ${(props) => `${props.xAxisLeftPosition}%`};
	transform: translateX(-50%);
	color: #63727a;
	font-size: 1.44rem;
`;

const StatsXAxisCoordinates = () => {
	const { xAxisArray } = useSelector((state) => state.statsGraphReducer);

	return (
		<XAxisCoordinatesStyle>
			{xAxisArray.map(({ left, coordinate }) => {
				return (
					<XAxisCoordinateStyle xAxisLeftPosition={left}>
						{coordinate}
					</XAxisCoordinateStyle>
				);
			})}
		</XAxisCoordinatesStyle>
	);
};

export default StatsXAxisCoordinates;
