import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { UploadImage, SearchAndSelect, Caption } from "../../views/shared";

import styled from "styled-components";

const AddContentPageStyle = styled.div`
	display: grid;
	grid-template-columns: 36rem auto;
`;

const AddContentFormStyle = styled.div`
	width: 100%;
	padding: 1.5rem 1.2rem;
	border-right: 1px solid var(--primary-box-shadow-color);

	& > * {
		margin-bottom: 3rem;
	}
`;

const AddContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& > h3 {
		font-size: 2rem;
		color: var(--primary-text-color);
	}
`;

const MessageStyle = styled.p`
	font-size: 1.3rem;
	color: ${(props) =>
		props.success
			? props.theme.isDarkMode
				? "#8cff90"
				: "#0e6d12"
			: props.theme.isDarkMode
			? "#fd8097"
			: "#a70202"};
	padding: 1rem 1.2rem;
	background-color: ${(props) =>
		props.success
			? props.theme.isDarkMode
				? "#4caf503b"
				: "#0ed60e47"
			: props.theme.isDarkMode
			? "#ff000033"
			: "#ff5b5b4d"};
	grid-column: 1 / 3;
	border-radius: 0.5rem;
	width: fit-content;
`;

const AddPostPage = () => {
	const dispatch = useDispatch();

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
						searchAndSelectType={"post-categories"}
						selectedValuesArray={selectedPostCategoriesArray}
						searchAPIEndpoint={"/search/post-categories"}
						searchResultType="SELECT_POST_CATEGORY"
						searchInputPlaceholder={"Search post categories"}
					/>
				</AddContentStyle>

				<AddContentStyle>
					<h3>Tag Users</h3>

					<SearchAndSelect
						searchAndSelectType={"users"}
						selectedValuesArray={taggedPostUsersArray}
						searchAPIEndpoint={"/search/users"}
						searchResultType="SELECT_POST_USER"
						searchInputPlaceholder={"Search for users"}
					/>
				</AddContentStyle>

				<AddContentStyle>
					<h3>Caption</h3>

					<Caption captionType={"caption"} />
				</AddContentStyle>
			</AddContentFormStyle>
		</AddContentPageStyle>
	);
};

export default AddPostPage;
