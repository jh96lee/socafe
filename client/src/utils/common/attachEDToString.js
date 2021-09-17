const attachEDToString = (string) => {
	const sliceEnd = string.length - 1;

	const slicedString = string.slice(0, sliceEnd);

	return slicedString + "ed";
};

export default attachEDToString;
