export const dropdownElementTypeIdentifier = (type) => {
	const availableTypesArray = ["user", "product", "category", "link"];

	const splittedTypeArray = type.split("-");

	const identifiedTypesArray = [];

	availableTypesArray.forEach((type) => {
		if (splittedTypeArray.includes(type)) {
			identifiedTypesArray.push(type);
		}
	});

	if (identifiedTypesArray.includes("category")) {
		return "category";
	} else {
		return identifiedTypesArray[0];
	}
};
