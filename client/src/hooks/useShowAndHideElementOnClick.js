import * as React from "react";

const useShowAndHideElementOnClick = (
	dropdownTriggerID,
	dropdownMenuID,
	setIsOpen,
	isDropdown
) => {
	React.useEffect(() => {
		const listener = document.addEventListener("click", (e) => {
			// REVIEW: firefox
			const path = (e.composedPath && e.composedPath()) || e.path;

			const clickedElementPathID = path.map((element) => element.id);

			if (
				// REVIEW: if user clicked on presentational/trigger element, then within the path array, the dropdownTriggerID
				// REVIEW: which is located at the outermost div, will be included
				// REVIEW: On the other hand, dropdownMenuID will not exist. In this case, we want to do the following
				clickedElementPathID.includes(dropdownTriggerID) &&
				!clickedElementPathID.includes(dropdownMenuID)
			) {
				setIsOpen((prevState) => !prevState);
			} else if (
				// REVIEW: if clicked directly on the dropdown element or any element that shows and hides, then do nothing
				e.target.id === dropdownMenuID
			) {
				return;
			} else if (
				// REVIEW: if a user clicked on the inner of the element of a dropdown, then we want to close the dropdown
				clickedElementPathID.includes(dropdownMenuID)
			) {
				if (
					// REVIEW: if it is a dropdown, then when the DropdownElement has been clicked, we want to trigger the onClickEvent
					// REVIEW: handler of the DropdownElement and close the DropdownMenu
					isDropdown
				) {
					setIsOpen(false);
				} else {
					// REVIEW: if it's not a dropdown, say a responsive searchbar, then we don't want the Searchbar to close when the user
					// REVIEW: clicks on the input or other part of the Searchbar
					return;
				}
			} else if (
				// REVIEW: if user clicked outside of the DropdownMenu, close it
				!clickedElementPathID.includes(dropdownTriggerID) &&
				!clickedElementPathID.includes(dropdownMenuID)
			) {
				setIsOpen(false);
			}
		});

		return () => {
			document.removeEventListener("click", listener);
		};
	}, [dropdownTriggerID]);
};

export default useShowAndHideElementOnClick;
