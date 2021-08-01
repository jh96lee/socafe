export const limitTextAreaCharacters = (
	nodesArray,
	charactersLimit,
	totalCharacters
) => {
	if (totalCharacters < charactersLimit) {
		return nodesArray;
	}

	const limitedCharactersNodesArray = [];
	let stopIndex;
	let previousIndexTotalCharacters = 0;
	let stopIndexTotalCharacters = 0;

	for (let i = 0; i < nodesArray.length; i++) {
		const { node_type, node_value } = nodesArray[i];

		if (node_type === "P") {
			stopIndexTotalCharacters += node_value.length;

			if (stopIndexTotalCharacters >= charactersLimit) {
				stopIndex = i;

				break;
			} else {
				previousIndexTotalCharacters += node_value.length;
			}
		}
	}

	for (let i = 0; i < nodesArray.length; i++) {
		const { node_type, node_value } = nodesArray[i];

		if (i < stopIndex) {
			limitedCharactersNodesArray.push({ node_type, node_value });
		} else if (i === stopIndex) {
			limitedCharactersNodesArray.push({
				node_type,
				node_value: node_value.substring(
					0,
					charactersLimit - previousIndexTotalCharacters
				),
			});
		} else {
			break;
		}
	}

	return limitedCharactersNodesArray;
};
