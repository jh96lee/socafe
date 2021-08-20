export const numericizeFontSize = (fontSizeString) => {
	const integersArray = [];

	for (let i = 0; i < fontSizeString.length; i++) {
		const char = fontSizeString[i];

		const parsedChar = parseInt(char);

		if (Number.isInteger(parsedChar)) {
			integersArray.push(parsedChar);
		}
	}

	const joinedIntegers = integersArray.join("");

	return parseInt(joinedIntegers);
};
