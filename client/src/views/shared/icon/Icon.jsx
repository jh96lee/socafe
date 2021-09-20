import * as React from "react";

import { IconStyle } from "./IconStyle";

const Icon = ({
	children,
	iconID,
	iconRole,
	iconType = null,
	iconPadding,
	iconSize,
	iconDimension,
	iconBGColor,
	iconBGHoverColor,
	iconFill,
	iconHoverFill,
	iconOnClick,
	iconStyleObject,
	otherProps,
}) => {
	const iconStylesObject = {
		overlay: {
			iconBGColor: "#0000004a",
			iconFill: "#fff",
		},
		button: {
			iconBGColor: "transparent",
			iconFill: "var(--char-default)",
		},
		presentation: {
			iconBGColor: "transparent",
			iconBGHoverColor: "none",
			iconFill: "var(--char-default)",
			iconPadding: "0rem",
		},
		link: {
			iconBGColor: "var(--bg-presentation)",
			iconBGHoverColor: null,
			iconFill: "var(--char-presentation)",
		},
		standalone: {
			iconBGColor: "none",
			iconBGHoverColor: "none",
			iconPadding: "0rem",
		},
	};

	const iconStyle = iconType ? iconStylesObject[iconType] : {};

	return (
		<IconStyle
			role={iconRole}
			iconID={iconID}
			iconSize={iconSize}
			iconDimension={iconDimension}
			iconPadding={iconPadding ? iconPadding : iconStyle.iconPadding}
			iconBGColor={iconBGColor ? iconBGColor : iconStyle.iconBGColor}
			iconBGHoverColor={
				iconBGHoverColor ? iconBGHoverColor : iconStyle.iconBGHoverColor
			}
			iconFill={iconFill ? iconFill : iconStyle.iconFill}
			iconHoverFill={iconHoverFill}
			{...iconStyleObject}
			onClick={iconOnClick}
			{...otherProps}
		>
			{children}
		</IconStyle>
	);
};

export default Icon;
