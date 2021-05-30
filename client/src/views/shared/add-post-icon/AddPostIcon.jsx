import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { AddPostIconStyle } from "./AddPostIconStyle";

import { PlusPost } from "../../../assets";

const AddPostIcon = () => {
	const history = useHistory();

	const location = useLocation();

	const pathname = location.pathname;

	const handleOnClick = () => {
		history.push("/add-post");
	};

	return (
		<React.Fragment>
			{pathname !== "/add-post" && (
				<AddPostIconStyle onClick={handleOnClick}>
					<PlusPost />
				</AddPostIconStyle>
			)}
		</React.Fragment>
	);
};

export default AddPostIcon;
