const fetchTopicIDsFromQueryString = (fullQueryString) => {
	if (!fullQueryString) {
		return [];
	}

	const queryObject = {};

	const removeQuestionMark = fullQueryString.substring(1);

	const splittedQueriesArray = removeQuestionMark.split("&");

	for (let i = 0; i < splittedQueriesArray.length; i++) {
		const paramterAndValueArray = splittedQueriesArray[i].split("=");

		if (paramterAndValueArray.length === 2) {
			const parameter = paramterAndValueArray[0];
			const valuesArray = paramterAndValueArray[1]
				.split(",")
				.map((value) => value.trim());

			if (!queryObject[parameter]) {
				queryObject[parameter] = valuesArray;
			} else if (queryObject[parameter]) {
				queryObject[parameter] = [...queryObject[parameter], ...valuesArray];
			}
		}
	}

	const topicIDsArray = queryObject.topics ? queryObject.topics : [];

	return topicIDsArray;
};

export default fetchTopicIDsFromQueryString;
