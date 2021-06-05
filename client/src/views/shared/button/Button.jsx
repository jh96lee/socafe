import React from "react";

import ButtonStyle from "./ButtonStyle";

const Button = ({
	children,
	success,
	error,
	onClick,
	disabled,
	buttonStyleObject,
}) => {
	return (
		<ButtonStyle
			success={success}
			error={error}
			disabled={disabled}
			onClick={onClick}
			{...buttonStyleObject}
		>
			{children}
		</ButtonStyle>
	);
};

export default Button;
