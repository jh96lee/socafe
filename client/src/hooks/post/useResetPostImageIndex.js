import * as React from "react";

const useResetPostImageIndex = (isImageDeleting, setCurrentImageIndex) => {
	return React.useEffect(() => {
		if (isImageDeleting) {
			setCurrentImageIndex(0);
		}
	}, [isImageDeleting]);
};

export default useResetPostImageIndex;
