import * as React from "react";
import { useHistory } from "react-router";

import { IconElement } from "../../shared";

import { AddContentHeaderStyle } from "../../../styles";

import { Left } from "../../../assets";

const AddStoryHeader = () => {
	const history = useHistory();

	const handleIconElementOnClick = () => {
		history.push("/");
	};

	return (
		<AddContentHeaderStyle>
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
		</AddContentHeaderStyle>
	);
};

export default AddStoryHeader;
