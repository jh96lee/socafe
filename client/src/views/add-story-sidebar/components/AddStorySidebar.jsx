import * as React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import AddStorySidebarHeader from "./AddStorySidebarHeader";
import AddStorySidebarBody from "./AddStorySidebarBody";
import AddStorySidebarFooter from "./AddStorySidebarFooter";

import { PageSidebarStyle } from "../../../styles";

const AddStoryForm = () => {
	const history = useHistory();

	const { uploadedStoryID } = useSelector((state) => state.storyUploadReducer);

	React.useEffect(() => {
		if (uploadedStoryID) {
			history.push(`/`);
		}
	}, [uploadedStoryID]);

	return (
		<PageSidebarStyle>
			<AddStorySidebarHeader />

			<AddStorySidebarBody />

			<AddStorySidebarFooter />
		</PageSidebarStyle>
	);
};

export default AddStoryForm;
