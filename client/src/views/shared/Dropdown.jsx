import React from "react";
import styled from "styled-components";

import useShowAndHideElementOnClick from "../../hooks/useShowAndHideElementOnClick";

const DropdownStyle = styled.div`
	position: absolute;
	top: 100%;
	background-color: cornflowerblue;
	padding: 1rem;
`;

const Dropdown = ({
	dataArray,
	eventHandler,
	isOpen,
	setIsOpen,
	triggerElementID,
	customDropdownId,
}) => {
	useShowAndHideElementOnClick(triggerElementID, "dropdown", setIsOpen, true);

	return isOpen && dataArray.length > 0 ? (
		<DropdownStyle id="dropdown">
			{dataArray.map((element, idx) => {
				return (
					<h5
						style={{
							fontSize: "1,7rem",
							fontWeight: "500",
							padding: "1rem",
							margin: "0.7rem",
							border: "1px solid black",
						}}
						key={`${customDropdownId}__${idx}`}
						onClick={() =>
							console.log(
								"sjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdksjkdbaksdjasbdjsabdjkasbjdsbakdajsbdkasbdk"
							)
						}
					>
						{element}
					</h5>
				);
			})}
		</DropdownStyle>
	) : null;
};

export default Dropdown;
