import React from "react";

import ButtonStyle from "./ButtonStyle";

const Button = ({
	children,
	success,
	error,
	onClick,
	disabled,
	buttonType,
	buttonStyleObject,
	otherProps,
}) => {
	const buttonStyles = {
		outline: {
			buttonColor: "var(--char-default)",
			buttonBackgroundColor: "transparent",
			buttonBorder: "1px solid var(--divider-2)",
			buttonHoverBackgroundColor: "var(--bg-2-hover)",
		},
		transparent: {
			buttonColor: "var(--char-2)",
			buttonBackgroundColor: "transparent",
			buttonPadding: "0.7rem 1rem",
			buttonHoverBackgroundColor: "var(--bg-2-hover)",
		},
		contrast: {
			buttonColor: "var(--char-contrast)",
			buttonBackgroundColor: "var(--bg-contrast)",
			buttonHoverBackgroundColor: "var(--bg-contrast-hover)",
		},
		standalone: {
			buttonColor: "var(--char-default)",
			buttonBackgroundColor: "transparent",
			buttonHoverBackgroundColor: "transparent",
			buttonPadding: "0rem",
		},
	};

	const buttonStyleProps = buttonType ? buttonStyles[buttonType] : {};

	return (
		<ButtonStyle
			success={success}
			error={error}
			disabled={disabled}
			onClick={onClick}
			{...buttonStyleProps}
			{...buttonStyleObject}
			style={otherProps}
		>
			{children}
		</ButtonStyle>
	);
};

export default Button;
