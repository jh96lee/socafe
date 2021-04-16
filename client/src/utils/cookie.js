// TODO: later set an expiration on the cookie
export const setCookie = (key, value) => {
	document.cookie = key + "=" + value + ";";
};

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

		return userInfo;
	} else {
		return null;
	}
};
