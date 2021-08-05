import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Button, Loader } from "../../shared";
import AddPostImages from "./AddPostImages";
import AddPostTopics from "./AddPostTopics";
import AddPostUsers from "./AddPostUsers";
import AddPostCaption from "./AddPostCaption";
import AddPostHeader from "./AddPostHeader";

import { uploadPost } from "../../../redux/add-post/post-upload/postUploadAction";

import {
	AddContentFormStyle,
	AddContentsStyle,
	AddContentButtonWrapperStyle,
} from "../../../styles";

const AddPostForm = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const { uploadedPostID, isPostUploading, postUploadSuccessMessage } =
		useSelector((state) => state.postUploadReducer);

	const { uploadedPostImagesArray } = useSelector(
		(state) => state.postImagesReducer
	);
	const { postTopicsArray } = useSelector((state) => state.postTopicsReducer);
	const { postUsersArray } = useSelector((state) => state.postUsersReducer);
	const { postCaptionsNodesArray, postCaptionsErrorMessage } = useSelector(
		(state) => state.postCaptionsReducer
	);

	React.useEffect(() => {
		if (uploadedPostID) {
			localStorage.removeItem("postTopics");
			localStorage.removeItem("postUsers");
			localStorage.removeItem("postCaptions");
			localStorage.removeItem("postImages");

			history.push(`/post/${uploadedPostID}`);
		}
	}, [uploadedPostID]);

	return (
		<AddContentFormStyle>
			<AddPostHeader />

			<AddContentsStyle>
				<AddPostImages />

				<AddPostTopics />

				<AddPostUsers />

				<AddPostCaption />
			</AddContentsStyle>

			<AddContentButtonWrapperStyle>
				<Button
					disabled={
						uploadedPostImagesArray.length === 0 ||
						postTopicsArray.length === 0 ||
						postCaptionsErrorMessage
					}
					success={postUploadSuccessMessage}
					onClick={() => {
						dispatch(
							uploadPost(
								uploadedPostImagesArray,
								postTopicsArray,
								postUsersArray,
								postCaptionsNodesArray
							)
						);
					}}
				>
					{isPostUploading ? (
						<Loader loaderSize="2rem" loaderBorderSize="0.3rem" />
					) : postUploadSuccessMessage ? (
						postUploadSuccessMessage
					) : (
						"Submit"
					)}
				</Button>
			</AddContentButtonWrapperStyle>
		</AddContentFormStyle>
	);
};

export default AddPostForm;
