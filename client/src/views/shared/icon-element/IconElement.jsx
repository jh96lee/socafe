import * as React from "react";

import IconElementStyle from "./IconElementStyle";

const IconElement = ({
	children,
	iconSize,
	iconColor,
	iconUsage,
	iconBreakingPoint,
	iconResponsiveSize,
	onClickEventHandler,
}) => {
	return (
		<IconElementStyle
			iconColor={iconColor}
			iconSize={iconSize}
			iconUsage={iconUsage}
			role={iconUsage}
			tabIndex="0"
			iconBreakingPoint={iconBreakingPoint}
			iconResponsiveSize={iconResponsiveSize}
			onClick={onClickEventHandler}
		>
			{children}
		</IconElementStyle>
	);
};

export default IconElement;
