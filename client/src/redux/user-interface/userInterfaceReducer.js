const isDarkModeLocalStorage = localStorage.getItem("theme");

const initialState = {
	isDarkMode: isDarkModeLocalStorage
		? JSON.parse(isDarkModeLocalStorage)
		: true,
	isResponsiveNavigationOpen: false,
};

const userInterfaceReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_IS_DARK_MODE":
			return {
				...state,
				isDarkMode: setIsDarkMode(state),
			};
		case "SET_IS_RESPONSIVE_NAVIGATION_OPEN":
			return {
				...state,
				isResponsiveNavigationOpen: action.payload
					? action.payload
					: !state.isResponsiveNavigationOpen,
			};
		default:
			return state;
	}
};

const setIsDarkMode = (state) => {
	localStorage.setItem("theme", !state.isDarkMode);

	return !state.isDarkMode;
};

export default userInterfaceReducer;
