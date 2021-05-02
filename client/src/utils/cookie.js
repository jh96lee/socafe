// TODO: later set an expiration on the cookie
export const setCookie = (key, value) => {
	document.cookie = key + "=" + value + ";";
};

// REVIEW: needed so that we can send the token to access private routes
export const fetchToken = () => {
	const cookie = document.cookie;

	const token = cookie.split("=")[1];

	return token;
};

export const decodePayloadFromCookie = () => {
	const cookie = document.cookie;

	if (cookie) {
		// REVIEW: token could either be undefined or a legitimate token
		const token = document.cookie.split("=")[1];

		if (token === "undefined") {
			return null;
		} else {
			const jwtTokenPayload = token.split(".")[1];

			const userData = window.atob(jwtTokenPayload);

			return JSON.parse(userData);
		}
	} else {
		return null;
	}
};

export const decodePayload = (token) => {
	const jwtTokenPayload = token.split(".")[1];

	const userData = window.atob(jwtTokenPayload);

	return JSON.parse(userData);
};
