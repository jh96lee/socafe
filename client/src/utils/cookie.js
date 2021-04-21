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

export const fetchPayloadAndDecode = () => {
	// REVIEW: will get something like token=blahblahblahtoken
	const cookie = document.cookie;

	if (cookie) {
		// REVIEW: JWT token
		const token = cookie.split("=")[1];

		const jwtTokenPayload = token.split(".")[1];

		const userInfo = window.atob(jwtTokenPayload);

		return JSON.parse(userInfo);
	} else {
		return null;
	}
};
