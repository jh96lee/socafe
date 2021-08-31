import * as React from "react";
import { useHistory } from "react-router";

import { IconElement } from "../../shared";

import { PageSidebarHeaderStyle } from "../../../styles";

import { Left, Remove } from "../../../assets";

const AddStorySidebarHeader = ({
	absoluteSidebarBreakingPoint,
	setisResponsiveAddStorySidebarOpen,
}) => {
	const history = useHistory();

	const handleIconElementOnClick = () => {
		history.push("/");
	};

	const handleRemoveIconOnClick = () => {
		setisResponsiveAddStorySidebarOpen(false);
	};

	return (
		<PageSidebarHeaderStyle
			absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
		>
			<IconElement
				iconElementStyleObject={{
					elementPadding: "0.6rem",
					iconSize: "2.5rem",
				}}
				onClick={handleIconElementOnClick}
			>
				<Left />
			</IconElement>

			<h2>Add Story</h2>

			<IconElement
				iconElementStyleObject={{
					elementPadding: "0.6rem",
					iconSize: "2.5rem",
				}}
				onClick={handleRemoveIconOnClick}
			>
				<Remove />
			</IconElement>
		</PageSidebarHeaderStyle>
	);
};

export default AddStorySidebarHeader;