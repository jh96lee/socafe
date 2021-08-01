export const calculateTotalCharacters = (nodesArray) => {
	return nodesArray.reduce((acc, node) => {
		if (node.node_type === "P" || node.nodeType === "P") {
			const nodeCharactersLength =
				node.node_value.length || node.nodeValue.length;

			return acc + nodeCharactersLength;
		} else {
			return acc + 0;
		}
	}, 0);
};
