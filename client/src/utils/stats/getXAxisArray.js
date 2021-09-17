import { convertDate } from "../index";

const getXAxisArray = (array) => {
	const xAxisValuesArray = [];

	const totalXAxisGaps = array.length;

	const xAxisValueIncrementalValue = 100 / totalXAxisGaps;

	for (let i = 0; i < totalXAxisGaps; i++) {
		const date = convertDate(array[i].date);

		if (i === 0) {
			xAxisValuesArray.push({
				position: xAxisValueIncrementalValue / 2,
				date,
			});
		} else {
			xAxisValuesArray.push({
				position:
					xAxisValueIncrementalValue / 2 + xAxisValueIncrementalValue * i,
				date,
			});
		}
	}

	return xAxisValuesArray;
};

export default getXAxisArray;
