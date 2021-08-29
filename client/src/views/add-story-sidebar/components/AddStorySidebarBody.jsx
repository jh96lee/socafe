import * as React from "react";

import AddStoryBackground from "./AddStoryBackground";
import AddStoryText from "./AddStoryText";
import AddStoryImage from "./AddStoryImage";

import { AddStoryPageSidebarBodyStyle } from "../styles/AddStoryPageSidebarBodyStyle";

const AddStorySidebarBody = () => {
	return (
		<AddStoryPageSidebarBodyStyle>
			<AddStoryBackground />

			<AddStoryImage />

			<AddStoryText />
		</AddStoryPageSidebarBodyStyle>
	);
};

export default AddStorySidebarBody;
