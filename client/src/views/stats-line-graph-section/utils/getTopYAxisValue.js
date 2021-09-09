export const getTopYAxisValue = (array, numberOfGraphLines) => {
	let topYAxisValue;

	const viewsArray = array.map((stat) => stat.views);

	const highestValue = Math.max(...viewsArray);

	for (let i = 0; i < numberOfGraphLines; i++) {
		const sum = highestValue + i + 1;

		if (sum % numberOfGraphLines === 0) {
			topYAxisValue = sum;

			break;
		} else {
			continue;
		}
	}

	return topYAxisValue;
};
