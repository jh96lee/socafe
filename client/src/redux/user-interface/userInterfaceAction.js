export const setIsDarkMode = () => ({
	type: "SET_IS_DARK_MODE",
});

export const setIsResponsiveNavigationOpen = (isOpen) => ({
	type: "SET_IS_RESPONSIVE_NAVIGATION_OPEN",
	payload: isOpen,
});
