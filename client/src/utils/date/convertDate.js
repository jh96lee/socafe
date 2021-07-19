export const convertDate = (date) => {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const dateArray = date
		.split("T")[0]
		.split("-")
		.map((stringNumber) => parseInt(stringNumber));

	const year = dateArray[0];
	const month = months[dateArray[1] - 1];
	const day = dateArray[2];

	return `${month} ${day}, ${year}`;
};
