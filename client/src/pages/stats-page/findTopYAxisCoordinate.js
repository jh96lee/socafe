export const findTopYAxisCoordinate = (number, numberToDivideBy) => {
	let topYAxisCoordinate = null;

	for (let i = 0; i < numberToDivideBy; i++) {
		const sum = number + i + 1;

		if (sum % numberToDivideBy === 0) {
			topYAxisCoordinate = sum;

			break;
		} else {
			continue;
		}
	}

	return topYAxisCoordinate;
};
