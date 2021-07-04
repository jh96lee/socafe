import * as React from "react";

const useDropdown = (triggerID, dropdownMenuID, isDropdown = true) => {
	const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false);

	React.useEffect(() => {
		const listener = document.addEventListener("click", (e) => {
			const path = (e.composedPath && e.composedPath()) || e.path;

			const clickedElementPathID = path.map((element) => element.id);

			if (
				// REVIEW: if clicked element's path includes the triggerID but not the dropdownMenuID
				// REVIEW: that means the trigger has been clicked
				clickedElementPathID.includes(triggerID) &&
				!clickedElementPathID.includes(dropdownMenuID)
			) {
				setIsDropdownMenuOpen((prevState) => !prevState);
			} else if (
				// REVIEW: if the dropdownMenu itself was directly clicked, then do nothing
				e.target.id === dropdownMenuID
			) {
				return;
			} else if (
				// REVIEW: this means that the inside of the dropdownMenu has been clicked
				// REVIEW: therefore, trigger the onClick of DropdownElement and close the menu
				clickedElementPathID.includes(dropdownMenuID)
			) {
				if (isDropdown) {
					setIsDropdownMenuOpen(false);
				} else {
					return;
				}
			} else if (
				// REVIEW: this indicates that outside of the Dropdown has been clicked
				!clickedElementPathID.includes(triggerID) &&
				!clickedElementPathID.includes(dropdownMenuID)
			) {
				setIsDropdownMenuOpen(false);
			}
		});

		return () => {
			document.removeEventListener("click", listener);
		};
	}, [triggerID, dropdownMenuID]);

	return { isDropdownMenuOpen, setIsDropdownMenuOpen };
};

export default useDropdown;
