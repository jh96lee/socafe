export const calculateTotalCharacters = (nodesArray) => {
	return nodesArray.reduce((acc, node) => {
		const nodeType = node.nodeType ? node.nodeType : node.node_type;

		if (nodeType === "P") {
			const nodeCharactersLength = node.node_value
				? node.node_value.length
				: node.nodeValue.length;

			return acc + nodeCharactersLength;
		} else {
			return acc + 0;
		}
	}, 0);
};
