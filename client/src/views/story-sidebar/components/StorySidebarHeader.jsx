import * as React from "react";
import { useHistory } from "react-router-dom";

import { IconElement } from "../../shared";

import { PageSidebarHeaderStyle } from "../../../styles";

import { Left, Remove } from "../../../assets";

const StorySidebarHeader = ({
	absoluteSidebarBreakingPoint,
	setisResponsiveStorySidebarOpen,
}) => {
	const history = useHistory();

	const handleIconElementOnClick = () => {
		history.push("/");
	};

	const handleRemoveIconOnClick = () => {
		setisResponsiveStorySidebarOpen(false);
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

			<h2>Stories</h2>

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

export default StorySidebarHeader;
