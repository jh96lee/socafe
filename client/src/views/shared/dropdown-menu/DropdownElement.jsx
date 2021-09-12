import * as React from "react";

import { Icon } from "../index";

import {
	DropdownElementStyle,
	DropdownElementTextsStyle,
} from "../../../styles";

const DropdownElement = ({
	icon,
	image,
	text,
	subText,
	onClickEventHandler,
}) => {
	return (
		<DropdownElementStyle onClick={onClickEventHandler}>
			{icon && (
				<Icon
					iconRole="presentation"
					iconType="link"
					iconSize="2.4rem"
					iconPadding="0.8rem"
				>
					{icon}
				</Icon>
			)}

			{image && <img src={image} alt="dropdown thumbnail" />}

			<DropdownElementTextsStyle>
				{text && <p>{text}</p>}

				{subText && <span>{subText}</span>}
			</DropdownElementTextsStyle>
		</DropdownElementStyle>
	);
};

export default DropdownElement;
