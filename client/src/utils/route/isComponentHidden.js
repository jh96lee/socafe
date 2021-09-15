export const isComponentHidden = (currentPathname, hideComponentPaths) => {
	let isComponentHidden = false;

	const splittedPathname = currentPathname.split("/");

	for (let i = 0; i < splittedPathname.length; i++) {
		if (hideComponentPaths.includes(splittedPathname[i])) {
			isComponentHidden = true;

			break;
		}
	}

	return isComponentHidden;
};
