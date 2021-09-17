const fetchToken = () => {
	const cookie = document.cookie;

	if (cookie) {
		const token = cookie.split("=")[1];

		return token;
	} else {
		return null;
	}
};

export default fetchToken;
