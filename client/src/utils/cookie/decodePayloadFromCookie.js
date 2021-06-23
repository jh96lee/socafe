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
