import * as React from "react";

const useSaveDraft = (contentToSaveKey, contentToSave) => {
	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			localStorage.setItem(contentToSaveKey, JSON.stringify(contentToSave));
		}

		afterInitialMount.current = true;
	}, [contentToSaveKey, contentToSave]);
};

export default useSaveDraft;
