// TODO: later set an expiration on the cookie
export const setCookie = (key, value) => {
	document.cookie = key + "=" + value + ";";
};

export const fetchPayloadAndDecode = () => {
	// REVIEW: will get something like token=blahblahblahtoken
	const cookie = document.cookie;

	// REVIEw: JWT token
	const token = cookie.split("=")[1];

	const jwtTokenPayload = token.split(".")[1];

	const userInfo = window.atob(jwtTokenPayload);

	return userInfo;
};
