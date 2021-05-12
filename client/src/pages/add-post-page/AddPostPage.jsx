import * as React from "react";

import { Loader } from "../../views/shared";
import {
	UploadImage,
	SelectCategories,
	Caption,
} from "../../views/add-post-form";

import styled from "styled-components";

const AddPostPageStyle = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	/* grid-column: 1 / 3; */
`;

const AddPostFormStyle = styled.div`
	margin-top: 3.5rem;
	width: 96rem;
	/* width: 100%; */

	& > * {
		margin-bottom: 3rem;
	}
`;

const Message = styled.p`
	color: ${(props) => (props.success ? "#8cff90" : "#fd8097")};
	padding: 1.2rem 1.5rem;
	background-color: ${(props) => (props.success ? "#4caf503b" : "#ff000033")};
	grid-column: 1 / 3;
	border-radius: 0.5rem;
	width: fit-content;
`;

const AddPostPage = () => {
	return (
		<AddPostPageStyle>
			<AddPostFormStyle>
				<UploadImage />

				<SelectCategories />

				<Caption />
			</AddPostFormStyle>
		</AddPostPageStyle>
	);
};

export default AddPostPage;
