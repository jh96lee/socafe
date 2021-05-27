// REVIEW: this is for checking if there were any errors after all the middlewares have been processed
const checkError = (req, res, next) => {
	// REVIEW: res.locals is an empty object which in JS is a truthy value, so we need another way to verify if property exists within res.locals
	const error = res.locals;

	const errorPropertiesArray = Object.keys(error);

	if (errorPropertiesArray.length > 0) {
		res.send({ error });
	} else {
		next();
	}
};

module.exports = checkError;
