// REVIEW: numberOfYAxisLines does not include the bottom line (x-axis)
export const getYAxisArray = (topYAxisValue, numberOfGraphLines) => {
	const yAxisValuesArray = [];

	const numberOfYAxisGaps = numberOfGraphLines;
	const totalNumberOfYAxisValues = numberOfGraphLines + 1;

	const yAxisValueIncrementalValue = topYAxisValue / numberOfYAxisGaps;

	for (let i = 0; i < totalNumberOfYAxisValues; i++) {
		const yAxisValue = i * yAxisValueIncrementalValue;

		const yAxisValuePosition = (100 / numberOfYAxisGaps) * i;

		yAxisValuesArray.push({
			value: yAxisValue,
			position: yAxisValuePosition,
		});
	}

	return yAxisValuesArray;
};
