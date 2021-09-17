const setCoupleSeconds = (callback, time) => {
	let timeout;

	const promise = new Promise((resolve, reject) => {
		timeout = setTimeout(() => {
			callback();

			resolve("resolve");
		}, time);
	});

	promise.then(() => {
		clearTimeout(timeout);
	});
};

export default setCoupleSeconds;
