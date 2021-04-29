import * as React from "react";

import IconElementStyle from "./IconElementStyle";

const IconElement = ({
	children,
	iconSize,
	iconColor,
	iconLevel,
	iconRole,
}) => {
	return (
		<IconElementStyle
			iconColor={iconColor}
			iconSize={iconSize}
			role={iconRole}
			tabIndex="0"
			iconLevel={iconLevel}
		>
			{children}
		</IconElementStyle>
	);
};

export default IconElement;
