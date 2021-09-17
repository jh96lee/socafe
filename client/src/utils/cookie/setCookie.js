const setCookie = (key, value) => {
	document.cookie = `${key}=${value};path=/`;
};

export default setCookie;
