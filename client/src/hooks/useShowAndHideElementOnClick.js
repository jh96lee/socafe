import * as React from "react";

// REVIEW: if the element is a dropdown, when a user clicks an element within the dropdown, we want to
// REVIEW: trigger whatever the element inside the dropdown does and close the dropdown
const useShowAndHideElementOnClick = (
	triggerID,
	elementID,
	setIsOpen,
	isDropdown
) => {
	React.useEffect(() => {
		const listener = document.addEventListener("click", (e) => {
			// REVIEW: firefox
			const path = (e.composedPath && e.composedPath()) || e.path;

			const clickedElementPathID = path.map((element) => element.id);

			// REVIEW: if the path of the clicked element has the trigger element's ID but does not have the id of the element
			// REVIEW: that means the trigger element has been clicked
			if (
				clickedElementPathID.includes(triggerID) &&
				!clickedElementPathID.includes(elementID)
			) {
				setIsOpen((prevState) => !prevState);
			} else if (e.target.id === elementID) {
				// REVIEW: if clicked directly on the dropdown element or any element that shows and hides, then do nothing
				return;
			} else if (clickedElementPathID.includes(elementID)) {
				// REVIEW: if a user clicked on the inner of the element of a dropdown, then we want to close the dropdown
				if (isDropdown) {
					setIsOpen(false);
				} else {
					// REVIEW: if a user clicks the inner of a search element, then we want to do nothing
					return;
				}
			} else if (
				!clickedElementPathID.includes(triggerID) &&
				!clickedElementPathID.includes(elementID)
			) {
				// REVIEW: if neither the trigger element ID nor the element ID exists within the array, that means the outside of the element has been clicked
				setIsOpen(false);
			}
		});

		return () => {
			document.removeEventListener("click", listener);
		};
	}, [triggerID]);
};

export default useShowAndHideElementOnClick;
