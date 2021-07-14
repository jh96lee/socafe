export const calculateTotalCharacters = (nodesArray) => {
	const textNodesLengthArray = nodesArray.map((node) => {
		if (node.type === "br") {
			return 0;
		} else {
			return node.nodeValue.length;
		}
	});

	const totalCharacters = textNodesLengthArray.reduce(
		(accumulator, currentValue) => {
			return accumulator + currentValue;
		}
	);

	return totalCharacters;
};
