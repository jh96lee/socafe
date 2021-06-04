import * as React from "react";

import IconElementStyle from "./IconElementStyle";

const IconElement = ({
	children,
	iconRole,
	onClick,
	iconElementStyleObject,
}) => {
	return (
		<IconElementStyle
			role={iconRole}
			tabIndex="0"
			onClick={onClick}
			{...iconElementStyleObject}
		>
			{children}
		</IconElementStyle>
	);
};

export default IconElement;
