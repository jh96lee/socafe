const initialState = {
	isDarkMode: true,
	isResponsiveNavigationOpen: false,
};

const userInterfaceReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_IS_DARK_MODE":
			return {
				...state,
				isDarkMode: !state.isDarkMode,
			};
		case "SET_IS_RESPONSIVE_NAVIGATION_OPEN":
			return {
				...state,
				isResponsiveNavigationOpen: !state.isResponsiveNavigationOpen,
			};
		default:
			return state;
	}
};

export default userInterfaceReducer;
