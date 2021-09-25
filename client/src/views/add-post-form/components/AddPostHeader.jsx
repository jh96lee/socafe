import * as React from "react";
import { useHistory } from "react-router";

import { Icon } from "../../shared";

import { AddContentHeaderStyle } from "../../../styles";

import { Left } from "../../../assets";

const AddPostHeader = () => {
	const history = useHistory();

	const handleIconOnClick = () => {
		history.push("/");
	};

	return (
		<AddContentHeaderStyle>
			<Icon iconRole="button" iconOnClick={handleIconOnClick}>
				<Left />
			</Icon>

			<h2>Add Post</h2>
		</AddContentHeaderStyle>
	);
};

export default AddPostHeader;
