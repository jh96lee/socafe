export const camelCaseString = (text) => {
	const splittedArray = text.split("-");

	const updatedArray = splittedArray.map((string, idx) => {
		if (idx > 0) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		} else {
			return string;
		}
	});

	const camelCased = updatedArray.join("");

	return camelCased;
};
