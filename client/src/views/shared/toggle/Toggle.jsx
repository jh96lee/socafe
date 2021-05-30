import * as React from "react";

import ToggleStyle from "./ToggleStyle";

const Toggle = ({
	toggleState,
	toggleWidth,
	toggleHeight,
	toggleOnClickEventHandler,
	// REVIEW: this could be theme toggle or just or ordinary toggle
	toggleType,
	// REVIEW: this is an object
	toggleIcons,
}) => {
	return (
		<ToggleStyle
			toggleState={toggleState}
			toggleWidth={toggleWidth}
			toggleHeight={toggleHeight}
			toggleType={toggleType}
			onClick={toggleOnClickEventHandler}
		>
			<span>{toggleState ? toggleIcons.on : toggleIcons.off}</span>
		</ToggleStyle>
	);
};

export default Toggle;
