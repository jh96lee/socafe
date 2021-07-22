export const addSpaceToString = (string, offset) => {
	const firstString = string.slice(0, offset);
	const secondString = string.slice(offset, string.length);

	return `${firstString} ${secondString}`;
};
