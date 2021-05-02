import * as React from "react";

import IconElementStyle from "./IconElementStyle";

const IconElement = ({
	children,
	iconSize,
	iconColor,
	iconLevel,
	iconRole,
	iconBreakingPoint,
	iconResponsiveSize,
	onClickEventHandler,
}) => {
	return (
		<IconElementStyle
			iconColor={iconColor}
			iconSize={iconSize}
			role={iconRole}
			tabIndex="0"
			iconLevel={iconLevel}
			iconBreakingPoint={iconBreakingPoint}
			iconResponsiveSize={iconResponsiveSize}
			onClick={onClickEventHandler}
		>
			{children}
		</IconElementStyle>
	);
};

export default IconElement;
