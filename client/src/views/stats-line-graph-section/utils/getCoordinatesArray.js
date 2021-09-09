import { getXAxisArray } from "./getXAxisArray";

export const getCoordinatesArray = (array, topYAxisValue) => {
	const xAxisValuesArray = getXAxisArray(array);

	const coordinatesArray = array.map((stat, idx) => {
		return {
			xPosition: xAxisValuesArray[idx].position,
			yPosition: (stat.views / topYAxisValue) * 100,
			views: array[idx].views,
			date: array[idx].date,
		};
	});

	return coordinatesArray;
};
