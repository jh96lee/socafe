const isDarkModeLocalStorage = localStorage.getItem("theme");

const initialState = {
	isDarkMode: isDarkModeLocalStorage
		? JSON.parse(isDarkModeLocalStorage)
		: true,
	isResponsiveNavigationOpen: false,
	hideHeaderAndNavigationPaths: ["add", "edit", "story"],
};

const userInterfaceReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_IS_DARK_MODE":
			return {
				...state,
				isDarkMode: saveThemeInLocalStorage(state),
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

const saveThemeInLocalStorage = (state) => {
	localStorage.setItem("theme", !state.isDarkMode);

	return !state.isDarkMode;
};

export default userInterfaceReducer;
