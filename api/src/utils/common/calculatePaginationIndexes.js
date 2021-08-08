const calculatePaginationIndexes = (req) => {
	const page = parseInt(req.query.page);
	const size = parseInt(req.query.size);

	const betweenFront = 1 + size * (page - 1);
	const betweenBack = page * size;

	return {
		page,
		size,
		betweenFront,
		betweenBack,
	};
};

module.exports = calculatePaginationIndexes;
