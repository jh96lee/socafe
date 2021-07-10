import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { AddPostIconStyle } from "./AddPostIconStyle";

import { PlusAlt, HomeFilled } from "../../../assets";

const AddPostIcon = () => {
	const history = useHistory();

	const location = useLocation();

	const isAddIncludedInPathname = location.pathname.split("/").includes("add");

	const handleOnClick = () => {
		history.push(isAddIncludedInPathname ? "/" : "/add/post");
	};

	return (
		<React.Fragment>
			<AddPostIconStyle onClick={handleOnClick}>
				{isAddIncludedInPathname ? <HomeFilled /> : <PlusAlt />}
			</AddPostIconStyle>
		</React.Fragment>
	);
};

export default AddPostIcon;
