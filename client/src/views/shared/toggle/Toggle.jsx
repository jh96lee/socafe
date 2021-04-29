import * as React from "react";

import ToggleStyle from "./ToggleStyle";

const Toggle = ({
	isToggleTrue,
	setIsToggleTrue,
	toggleWidth,
	toggleHeight,
	toggleType,
	switchIcon,
}) => {
	return (
		<ToggleStyle
			isToggleTrue={isToggleTrue}
			onClick={() => setIsToggleTrue((prevState) => !prevState)}
			toggleWidth={toggleWidth}
			toggleHeight={toggleHeight}
			toggleType={toggleType}
		>
			<span>{switchIcon}</span>
		</ToggleStyle>
	);
};

export default Toggle;
