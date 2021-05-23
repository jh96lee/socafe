const checkError = (req, res, next) => {
	const { error } = req.body;

	if (error) {
		res.send({ error });
	} else {
		next();
	}
};

module.exports = checkError;
