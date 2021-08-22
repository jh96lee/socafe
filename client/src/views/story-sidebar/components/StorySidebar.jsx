import * as React from "react";
import { useHistory } from "react-router-dom";

import { IconElement } from "../../shared";
import StorySidebarUsers from "./StorySidebarUsers";

// FIX
import {
	StorySidebarStyle,
	StorySidebarHeaderStyle,
} from "../styles/StorySidebarStyle";

import { Left } from "../../../assets";

const StorySidebar = () => {
	const history = useHistory();

	return (
		<StorySidebarStyle>
			<StorySidebarHeaderStyle>
				<IconElement
					iconElementStyleObject={{
						elementPadding: "0.6rem",
						iconSize: "2.5rem",
					}}
					onClick={() => history.push("/")}
				>
					<Left />
				</IconElement>

				<h2>Stories</h2>
			</StorySidebarHeaderStyle>

			<StorySidebarUsers />
		</StorySidebarStyle>
	);
};

export default StorySidebar;
