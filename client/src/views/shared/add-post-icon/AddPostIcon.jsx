import * as React from "react";
import { useHistory } from "react-router-dom";

import { AddPostIconStyle } from "./AddPostIconStyle";

import { PlusPost } from "../../../assets";

const AddPostIcon = () => {
	const history = useHistory();

	const handleOnClick = () => {
		history.push("/add-post");
	};

	return (
		<AddPostIconStyle onClick={handleOnClick}>
			<PlusPost />
		</AddPostIconStyle>
	);
};

export default AddPostIcon;
