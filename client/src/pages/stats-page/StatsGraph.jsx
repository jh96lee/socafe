import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../views/shared";
import StatsXAxisCoordinates from "./StatsXAxisCoordinates";
import StatsYAxisCoordinates from "./StatsYAxisCoordinates";
import StatsYAxisLines from "./StatsYAxisLines";
import StatsConnectedCoordinates from "./StatsConnectedCoordinates";
import StatsGraphHeader from "./StatsGraphHeader";

import {
	fetchContentViewsArray,
	setGraphArrays,
} from "../../redux/stats/stats-graph/statsGraphAction";

import { findTopYAxisCoordinate } from "./findTopYAxisCoordinate";
import { convertDate } from "../../utils/date/convertDate";

const StatsGraphStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
	height: 40rem;
`;

const StatsStyle = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-bottom: 2px solid #b9c5d0;
	border-left: 2px solid #b9c5d0;

	& svg {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
	}
`;

const StatsGraph = () => {
	const dispatch = useDispatch();

	const {
		contentType,
		nDaysAgo,
		contentViewsArray,
		numberOfYAxisLines,
		isContentViewsArrayLoaded,
	} = useSelector((state) => state.statsGraphReducer);

	React.useEffect(() => {
		dispatch(fetchContentViewsArray(contentType, nDaysAgo));
	}, [contentType, nDaysAgo]);

	React.useEffect(() => {
		if (contentViewsArray.length > 0) {
			const viewsArray = contentViewsArray.map((data) => {
				return data.views;
			});

			const xAxisArray = [];
			const yAxisArray = [];
			const coordinatesArray = [];

			const numberOfXAxisGaps = viewsArray.length;
			const numberOfYAxisGaps = numberOfYAxisLines - 1;

			const maxNumber = Math.max(...viewsArray);

			const topYAxisCoordinate = findTopYAxisCoordinate(
				maxNumber,
				numberOfYAxisGaps
			);

			const yAxisCoordinatesIncrementalValue =
				topYAxisCoordinate / numberOfYAxisGaps;

			const xAxisCoordinatesIncrementalPositionValue = 100 / numberOfXAxisGaps;
			const yAxisCoordinatesIncrementalPositionValue = 100 / numberOfYAxisGaps;

			for (let i = 0; i < contentViewsArray.length; i++) {
				const leftValue =
					i === 0
						? xAxisCoordinatesIncrementalPositionValue / 2
						: xAxisCoordinatesIncrementalPositionValue * i +
						  xAxisCoordinatesIncrementalPositionValue / 2;

				xAxisArray.push({
					left: leftValue,
					coordinate: convertDate(contentViewsArray[i].date),
				});

				coordinatesArray.push({
					left: leftValue,
					bottom: (contentViewsArray[i].views / topYAxisCoordinate) * 100,
					value: contentViewsArray[i].views,
				});
			}

			for (let i = 0; i < numberOfYAxisLines; i++) {
				yAxisArray.push({
					bottom: yAxisCoordinatesIncrementalPositionValue * i,
					coordinate: yAxisCoordinatesIncrementalValue * i,
				});
			}

			dispatch(
				setGraphArrays({
					xAxisArray,
					yAxisArray,
					coordinatesArray,
				})
			);
		}
	}, [contentViewsArray]);

	return isContentViewsArrayLoaded ? (
		<StatsGraphStyle>
			<StatsGraphHeader />

			<StatsStyle>
				<StatsXAxisCoordinates />

				<StatsYAxisCoordinates />

				<StatsYAxisLines />

				<StatsConnectedCoordinates />
			</StatsStyle>
		</StatsGraphStyle>
	) : (
		<Loader />
	);
};

export default StatsGraph;
