const removeTailEndBreakingPoints = (nodesArray) => {
	for (let i = nodesArray.length - 1; i >= 0; i--) {
		const { nodeType } = nodesArray[i];

		if (nodeType === "BR") {
			nodesArray.splice(i, 1);

			continue;
		} else if (nodeType === "P") {
			break;
		}
	}

	return nodesArray;
};

export default removeTailEndBreakingPoints;
