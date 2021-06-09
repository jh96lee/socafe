import * as React from "react";

import IconElementStyle from "./IconElementStyle";

const IconElement = ({
	children,
	iconID,
	iconRole,
	onClick,
	iconElementStyleObject,
	otherProps,
}) => {
	return (
		<IconElementStyle
			id={iconID}
			role={iconRole}
			tabIndex="0"
			onClick={onClick}
			{...iconElementStyleObject}
			{...otherProps}
		>
			{children}
		</IconElementStyle>
	);
};

export default IconElement;
