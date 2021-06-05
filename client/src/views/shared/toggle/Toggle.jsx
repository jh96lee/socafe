import * as React from "react";

import ToggleStyle from "./ToggleStyle";

const Toggle = ({
	state,
	width,
	responsiveWidth,
	height,
	responsiveHeight,
	onClick,
	// REVIEW: this could be theme toggle or just or ordinary toggle
	type,
	// REVIEW: this is an object
	icons,
}) => {
	return (
		<ToggleStyle
			state={state}
			width={width}
			responsiveWidth={responsiveWidth}
			height={height}
			responsiveHeight={responsiveHeight}
			type={type}
			onClick={onClick}
		>
			<span>{state ? icons.on : icons.off}</span>
		</ToggleStyle>
	);
};

export default Toggle;
