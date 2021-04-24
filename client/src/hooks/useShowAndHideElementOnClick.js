import * as React from "react";

// REVIEW: if the element is a dropdown, when a user clicks an element within the dropdown, we want to
// REVIEW: trigger whatever the element inside the dropdown does and close the dropdown
const useShowAndHideElementOnClick = (
	triggerElementID,
	elementID,
	setIsOpen,
	isDropdown
) => {
	React.useEffect(() => {
		const listener = document.addEventListener("click", (e) => {
			const clickedElementPathID = e.path.map((element) => element.id);
			console.log(clickedElementPathID);

			// REVIEW: if clicked on any element within the trigger element, then perform the following
			if (clickedElementPathID.includes(triggerElementID)) {
				setIsOpen((prevState) => !prevState);
			} else if (e.target.id === elementID) {
				// REVIEW: if clicked directly on the dropdown element or any element that shows and hides, then do nothing
				return;
			} else if (clickedElementPathID.includes(elementID)) {
				if (isDropdown) {
					setIsOpen(false);
				} else {
					return;
				}
			} else {
				setIsOpen(false);
			}
		});

		return () => {
			document.removeEventListener("click", listener);
		};
	}, []);
};

export default useShowAndHideElementOnClick;
