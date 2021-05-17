import * as React from "react";
import { useSelector } from "react-redux";

import { UploadImage, SearchAndSelect, Caption } from "../../views/shared";
import { PostPreview } from "../../views/post-preview";

import {
	AddContentPageStyle,
	AddContentFormStyle,
	AddContentStyle,
} from "./AddPostPageStyle";

const AddPostPage = () => {
	const { selectedPostCategoriesArray, taggedPostUsersArray } = useSelector(
		(state) => state.addPostReducer
	);

	return (
		<AddContentPageStyle>
			<AddContentFormStyle>
				<AddContentStyle>
					<h3>Upload Photos</h3>

					<UploadImage />
				</AddContentStyle>

				<AddContentStyle>
					<h3>Select Categories</h3>

					<SearchAndSelect
						searchAndSelectTypes={{
							searchAndSelectType: "post-category",
							searchAndSelectedActionType: "REMOVE_POST_CATEGORY",
						}}
						searchResultTypes={{
							searchResultType: "search-and-select",
							searchResultActionType: "ADD_POST_CATEGORY",
						}}
						selectedValuesArray={selectedPostCategoriesArray}
						searchAPIEndpoint={"/search/post-categories"}
						searchInputPlaceholder={"Search post categories"}
					/>
				</AddContentStyle>

				<AddContentStyle>
					<h3>Tag Users</h3>

					<SearchAndSelect
						searchAndSelectTypes={{
							searchAndSelectType: "post-user",
							searchAndSelectedActionType: "REMOVE_USER_ON_POST",
						}}
						searchResultTypes={{
							searchResultType: "search-and-select",
							searchResultActionType: "ADD_USER_ON_POST",
						}}
						selectedValuesArray={taggedPostUsersArray}
						searchAPIEndpoint={"/search/users"}
						searchInputPlaceholder={"Search for users"}
					/>
				</AddContentStyle>

				<AddContentStyle>
					<h3>Caption</h3>

					<Caption captionType={"caption"} />
				</AddContentStyle>
			</AddContentFormStyle>

			<PostPreview />
		</AddContentPageStyle>
	);
};

export default AddPostPage;

// import styled from "styled-components";

// const MessageStyle = styled.p`
// 	font-size: 1.3rem;
// 	color: ${(props) =>
// 		props.success
// 			? props.theme.isDarkMode
// 				? "#8cff90"
// 				: "#0e6d12"
// 			: props.theme.isDarkMode
// 			? "#fd8097"
// 			: "#a70202"};
// 	padding: 1rem 1.2rem;
// 	background-color: ${(props) =>
// 		props.success
// 			? props.theme.isDarkMode
// 				? "#4caf503b"
// 				: "#0ed60e47"
// 			: props.theme.isDarkMode
// 			? "#ff000033"
// 			: "#ff5b5b4d"};
// 	grid-column: 1 / 3;
// 	border-radius: 0.5rem;
// 	width: fit-content;
// `;
