export const filterArrayByID = (array, id) => {
	return array.filter((element) => {
		return element.id !== id;
	});
};
