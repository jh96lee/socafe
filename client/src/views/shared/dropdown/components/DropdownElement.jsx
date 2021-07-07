import * as React from "react";

import { IconElement } from "../../index";

import { DropdownElementStyle } from "../styles/DropdownElementStyle";
import { DropdownElementMetadataStyle } from "../styles/DropdownElementMetadataStyle";

const DropdownElement = ({
	dropdownElementContent,
	dropdownElementOnClickLogic,
}) => {
	const handleDropdownElementOnClick = () => {
		dropdownElementOnClickLogic();
	};

	return (
		<DropdownElementStyle onClick={handleDropdownElementOnClick}>
			{dropdownElementContent.icon ? (
				<IconElement
					iconRole="presentation"
					iconElementStyleObject={{
						elementBackgroundColor: "var(--icon-presentation-bg-color)",
						elementHoverBackgroundColor: "none",
						iconColor: "var(--icon-presentation-color)",
					}}
				>
					{dropdownElementContent.icon}
				</IconElement>
			) : (
				<img
					src={
						dropdownElementContent.category_url ||
						dropdownElementContent.avatar_url
					}
					alt="dropdown element thumbnail"
				/>
			)}

			<DropdownElementMetadataStyle>
				<p>
					{dropdownElementContent.title ||
						dropdownElementContent.username ||
						dropdownElementContent.label}
				</p>

				{dropdownElementContent.full_name && (
					<span>{dropdownElementContent.full_name}</span>
				)}
			</DropdownElementMetadataStyle>
		</DropdownElementStyle>
	);
};

export default DropdownElement;
